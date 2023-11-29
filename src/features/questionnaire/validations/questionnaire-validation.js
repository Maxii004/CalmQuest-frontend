import * as yup from "yup";

export const questionnaireValidationSchema = yup.object().shape({
  q1: yup.string().required("Pick an answer"),
  q2: yup.string().required("Pick an answer"),
  q3: yup.string().required("Pick an answer"),
  q4: yup.string().required("Pick an answer"),
  q5: yup.string().required("Pick an answer"),
  q6: yup.string().required("Pick an answer"),
  q7: yup.string().required("Pick an answer"),
  q8: yup.string().required("Pick an answer"),
  q9: yup.string().required("Pick an answer"),
});
