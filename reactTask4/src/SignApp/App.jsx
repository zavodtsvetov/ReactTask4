import s from "./App.module.css";
import { Email } from "./email/Email";
import { Password } from "./password/Password";
import { useState } from "react";
import { useRef } from "react";

const sendData = (formData) => {
  console.log(formData);
};

function SignApp() {
  // состояния инпутов
  const [emailValue, setEmailValue] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  //состояния ошибок
  const [emailError, setEmailError] = useState("");
  const [firstPasswordError, setFirstPasswordError] = useState("");
  const [secondPasswordError, setSecondPasswordError] = useState("");
  //проверка совпадения паролей
  const [matchError, setMatchError] = useState("");
  // кнопка регистрации

  const [isDisabled, setIsDisabled] = useState(true);

  const submitButtonRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    let newMatchError = null;
    if (secondPassword !== firstPassword) {
      newMatchError = "Пароли не совпадают!";
    } else if (!matchError && !firstPasswordError) {
      sendData({ emailValue, firstPassword, secondPassword });
    }
    setMatchError(newMatchError);
  };
  const onFormChange = () => {
    if (
      emailValue &&
      !emailError &&
      firstPassword &&
      firstPasswordError === null &&
      secondPassword &&
      !secondPasswordError &&
      !matchError
    ) {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <div className={s.main}>
        <span className={s.welcome}> Welcome to S.O.C.</span>
        <form onSubmit={onSubmit} onChange={onFormChange}>
          <Email
            emailValue={emailValue}
            setEmailValue={setEmailValue}
            emailError={emailError}
            setEmailError={setEmailError}
          />
          <Password
            emailValue={emailValue}
            submitButtonRef={submitButtonRef}
            firstPassword={firstPassword}
            setFirstPassword={setFirstPassword}
            secondPassword={secondPassword}
            setSecondPassword={setSecondPassword}
            firstPasswordError={firstPasswordError}
            setFirstPasswordError={setFirstPasswordError}
            secondPasswordError={secondPasswordError}
            setSecondPasswordError={setSecondPasswordError}
          />
          {matchError && (
            <div className={s.error}>
              {matchError}
              <div></div>
            </div>
          )}
          <div className={s.styleButton}>
            <button
              disabled={isDisabled}
              ref={submitButtonRef}
              className={s.signUpButton}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignApp;
