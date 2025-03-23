import * as yup from "yup";

export const formScheme = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-z0-9._@]*$/, "Цифры, буквы и подчёркивание")
    .min(4, "Не менее 4х"),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, " Цифры буквы и всё")
    .min(4, "Не менее 4х"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});

export const sendForm = (data) => {
  console.log(data);
};
