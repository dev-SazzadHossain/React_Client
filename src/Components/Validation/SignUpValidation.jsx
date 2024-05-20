import * as Yup from "yup";

export const signUpValidation = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username cannot be longer than 15 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number")
    .matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter"),
});
