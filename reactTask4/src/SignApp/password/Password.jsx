import s from "./Password.module.css";

export const Password = ({
  emailValue,
  submitButtonRef,
  firstPassword,
  setFirstPassword,
  secondPassword,
  setSecondPassword,
  firstPasswordError,
  setFirstPasswordError,
  secondPasswordError,
  setSecondPasswordError,
}) => {
  let newError = null;

  const onFirstPasswordChange = ({ target }) => {
    if (emailValue && target.value === secondPassword) {
      submitButtonRef.current.focus();
    }
    setFirstPassword(target.value);
    setFirstPasswordError(newError);
  };
  const onSecondPasswordChange = ({ target }) => {
    if (emailValue && firstPassword === target.value) {
      submitButtonRef.current.focus();
    }
    setSecondPassword(target.value);
    setSecondPasswordError(newError);
  };

  const onFirstPasswordBlur = ({ target }) => {
    if (target.value.length < 3) {
      newError = "Ваш пароль слишком короткий, не менее 3 символов";
    }
    setFirstPasswordError(newError);
  };

  return (
    <>
      <div className={s.passwords}>
        <input
          onBlur={onFirstPasswordBlur}
          onChange={onFirstPasswordChange}
          className={s.passwordFirst}
          name="passwordFirst"
          type="password"
          placeholder="Придумайте пароль.."
        />
        {firstPasswordError && (
          <div className={s.error}>{firstPasswordError}</div>
        )}
        <input
          onChange={onSecondPasswordChange}
          className={s.passwordSecond}
          name="passwordSecond"
          type="password"
          placeholder="Повторите пароль.."
        />
      </div>
      {secondPasswordError && (
        <div className={s.error}>{secondPasswordError}</div>
      )}
    </>
  );
};
