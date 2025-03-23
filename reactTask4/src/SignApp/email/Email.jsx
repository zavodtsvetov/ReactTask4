import s from "./Email.module.css";

export const Email = ({
  emailValue,
  setEmailValue,
  emailError,
  setEmailError,
}) => {
  let newEmailError = null;

  const onEmailChange = ({ target }) => {
    if (!/^[a-z0-9@_.]*$/.test(target.value)) {
      newEmailError =
        "Ваш e-mail может содержать только нижний регистр латиницы, цифры и знак `_` ";
    } else if (target.value.length > 25) {
      newEmailError = "Слишком длинный e-mail. Не более 25 символов";
    }
    setEmailError(newEmailError);
    setEmailValue(target.value);
  };
  const onEmailBlur = () => {
    if (emailValue.length < 5) {
      newEmailError = "Ваш e-mail меньше 5 символов";
      setEmailError(newEmailError);
    }
  };

  return (
    <>
      <div className={s.email}>
        <input
          className={s.emailInput}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          type="email"
          placeholder="Введите ваш e-mail..."
        />
      </div>
      {emailError && <div className={s.error}>{emailError}</div>}
    </>
  );
};
