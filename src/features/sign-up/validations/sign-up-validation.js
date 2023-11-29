import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required("Enter your name"),
  age: yup
    .number()
    .positive("Enter a valid age")
    .integer("Enter a valid age")
    .min(10, "Age must be at least 10 years")
    .required("Enter your age"),
  email: yup.string().email("Enter a valid email").required("Enter your email"),
  password: yup.string().min(8).required("Enter a password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
