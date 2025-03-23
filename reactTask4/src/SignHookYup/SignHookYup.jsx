import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./SignHookYup.module.css";
import { sendForm, formScheme } from "./Scheme";

let isDisabled = true;

export const SignHookYup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(formScheme),
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const repeatPasswordError = errors.repeatPassword?.message;
  const submitRef = useRef(null);
  const onChange = () => {
    const e = watch("email");
    const p = watch("password");
    const r = watch("repeatPassword");
    if (e !== "" && p !== "" && r === p) {
      isDisabled = false;
      submitRef.current.focus();
    } else if (!emailError || !passwordError || !repeatPasswordError) {
      isDisabled = true;
    }
  };

  return (
    <>
      <h1>Welcome II SOC</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(sendForm)} onChange={onChange}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            {...register("email")}
          />{" "}
          {emailError && <div>{emailError}</div>}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />{" "}
          {passwordError && <div>{passwordError}</div>}
          <br />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            {...register("repeatPassword")}
          />
          {repeatPasswordError && <div>{repeatPasswordError}</div>}
          <br />
          <button
            disabled={isDisabled}
            type="submit"
            className={s.signUpButton}
            ref={submitRef}
          >
            Reg
          </button>
        </form>
      </div>
    </>
  );
};
