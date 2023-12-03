import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";
import useAuth from "../../../hooks/use-auth";
import useAxiosPrivate from "../../../hooks/use-axios-private";
import { questionnaireValidationSchema } from "../../validations/questionnaire-validation";
import {
  QUESTIONNAIRE_ANSWERS,
  POINTS_OF_QUESTIONNARIE_ANSWERS,
} from "../../../base/constants/questionnaire-answers";
import { QUESTIONNAIRE_QUESTIONS } from "../../../base/constants/questionnaire-questions";
import { totalScore } from "../../../base/helpers/calculations";
import { severityCheck } from "../../../base/helpers/depression-severity-check";
import { ISO_WITHOUT_TIME } from "../../../base/constants/date-formatting";
import { toast } from "react-toastify";
import COLORS from "../../../base/constants/colors";

const QuestionnaireForm = ({ attempted, handleOnClose }) => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  //
  return (
    <>
      {attempted && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          pb={3}
        >
          <InfoOutlined sx={{ height: 20, width: 20, color: "red" }} />
          <Typography variant="body" color="red">
            You have answered the questionnaire for today. Let's try again
            tomorrow.
          </Typography>
        </Stack>
      )}
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
        onSubmit={async (values, { setSubmitting }) => {
          let scores = [];
          for (let value in values) {
            scores.push(POINTS_OF_QUESTIONNARIE_ANSWERS[values[value]]);
          }
          const total = totalScore(scores);
          const depressionSeverity = severityCheck(total);
          const today = moment(new Date()).format(ISO_WITHOUT_TIME);
          try {
            const response = await axiosPrivate.post(
              `/users/${user?.userId}/questionnaire`,
              {
                dailyAverageScore: total,
                depressionSeverity,
                date: today,
              }
            );
            handleOnClose();
            if (!response?.data) {
              toast.error("Something went wrong");
            }
          } catch (error) {
            toast.error(error?.response?.data?.message);
          }
          setSubmitting(false);
        }}
        validationSchema={questionnaireValidationSchema}
      >
        {({ handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <div>
              <FormControl
                component="fieldset"
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{
                    color: COLORS.LAPIS_LAZULI,
                  }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                sx={{ color: COLORS.MOONSTONE, mb: 2, ml: 3 }}
              >
                <FormLabel
                  component="legend"
                  sx={{ color: COLORS.LAPIS_LAZULI }}
                >
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
                disabled={isSubmitting || attempted}
                sx={{ my: 2, ml: "80%", backgroundColor: COLORS.LAPIS_LAZULI }}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default QuestionnaireForm;
