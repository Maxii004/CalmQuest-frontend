import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { questionnaireValidationSchema } from "../../validations/questionnaire-validation";
import { QUESTIONNAIRE_ANSWERS } from "../../../base/constants/questionnaire-answers";
import { QUESTIONNAIRE_QUESTIONS } from "../../../base/constants/questionnaire-questions";

const QuestionnaireForm = () => {
  return (
    <Formik
      initialValues={{
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form data", values);
        setSubmitting(false);
      }}
      validationSchema={questionnaireValidationSchema}
    >
      {({ handleChange, handleBlur, isSubmitting }) => (
        <Form>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q1}
              </FormLabel>
              <RadioGroup
                aria-label="q1"
                name="q1"
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ my: 1 }}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q1" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q1" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q1" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q1" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q1"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q2}
              </FormLabel>
              <RadioGroup
                aria-label="q2"
                name="q2"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q2" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q2" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q2" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q2" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q2"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q3}
              </FormLabel>
              <RadioGroup
                aria-label="q3"
                name="q3"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q3" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q3" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q3" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q3" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q3"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q4}
              </FormLabel>
              <RadioGroup
                aria-label="q4"
                name="q4"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q4" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q4" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q4" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q4" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q4"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q5}
              </FormLabel>
              <RadioGroup
                aria-label="q5"
                name="q5"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q5" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q5" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q5" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q5" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q5"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q6}
              </FormLabel>
              <RadioGroup
                aria-label="q6"
                name="q6"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q6" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q6" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q6" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q6" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q6"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q7}
              </FormLabel>
              <RadioGroup
                aria-label="q7"
                name="q7"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q7" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q7" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q7" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q7" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q7"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q8}
              </FormLabel>
              <RadioGroup
                aria-label="q8"
                name="q8"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q8" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q8" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q8" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q8" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q8"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              component="fieldset"
              sx={{ color: "black", mb: 2, ml: 3 }}
            >
              <FormLabel component="legend" sx={{ color: "black" }}>
                {QUESTIONNAIRE_QUESTIONS.Q9}
              </FormLabel>
              <RadioGroup
                aria-label="q9"
                name="q9"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                  control={<Field as={Radio} name="q9" />}
                  label={QUESTIONNAIRE_ANSWERS.NOT_AT_ALL}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                  control={<Field as={Radio} name="q9" />}
                  label={QUESTIONNAIRE_ANSWERS.SEVERAL_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                  control={<Field as={Radio} name="q9" />}
                  label={QUESTIONNAIRE_ANSWERS.MORE_THAN_HALF_DAYS}
                />
                <FormControlLabel
                  value={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                  control={<Field as={Radio} name="q9" />}
                  label={QUESTIONNAIRE_ANSWERS.NEARLY_EVERYDAY}
                />
              </RadioGroup>
              <ErrorMessage
                name="q9"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ my: 2, ml: "80%" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionnaireForm;
