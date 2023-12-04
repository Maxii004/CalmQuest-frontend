import * as yup from "yup";

export const editProfileValidationSchema = yup.object().shape({
  name: yup.string().required("Enter your name"),
  age: yup
    .number()
    .positive("Enter a valid age")
    .integer("Enter a valid age")
    .min(10, "Age must be at least 10 years")
    .required("Enter your age"),
  interests: yup.string().required("Enter at least one of your interests"),
});
