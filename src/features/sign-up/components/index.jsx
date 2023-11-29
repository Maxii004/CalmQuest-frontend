import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { signUpValidationSchema } from "../validations/sign-up-validation.js";
import axios from "../../../api/axios.js";
import CalmQuest from "../../base/assets/images/png/calm-quest.png";
import ROUTES from "../../base/constants/routes.js";
import COLORS from "../../base/constants/colors.js";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        backgroundColor: COLORS.WATER,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignContent="center"
        alignSelf="center"
        alignItems="center"
        maxWidth={250}
        maxHeight={250}
      >
        <img
          src={CalmQuest}
          alt="launch-page"
          width={320}
          height={320}
          style={{ alignSelf: "center" }}
        />
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width={500}
        xs={12}
        md={6}
      >
        <Formik
          initialValues={{
            name: "",
            age: 0,
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            console.log(
              JSON.stringify({
                name: values?.name,
                age: values?.age,
                email: values?.email,
                password: values?.password,
              })
            );
            try {
              const response = await axios.post("/signup", {
                name: values?.name,
                age: values?.age,
                email: values?.email,
                password: values?.password,
              });
              console.log(response);
              resetForm();
              toast.success("Sign Up Sccessful!");
              navigate(ROUTES.HOME);
            } catch (error) {
              console.log(error);
              toast.error(error?.response?.data?.message);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                as={TextField}
                label="Name"
                name="name"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                value={values.name}
                variant="filled"
                sx={{ width: "100%", mb: 2 }}
              />
              <Field
                as={TextField}
                label="Age"
                name="age"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.age && errors.age)}
                helperText={touched.age && errors.age}
                value={values.age}
                variant="filled"
                sx={{ width: "100%", mb: 2 }}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                value={values.email}
                variant="filled"
                sx={{ width: "100%", mb: 2 }}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                type={"password"}
                value={values.password}
                variant="filled"
                sx={{ width: "100%", mb: 2 }}
              />
              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                helperText={touched.confirmPassword && errors.confirmPassword}
                type={"password"}
                value={values.confirmPassword}
                variant="filled"
                sx={{ width: "100%", mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: COLORS.CRYSTAL,
                  color: "white",
                  fontSize: "1rem",
                  borderRadius: "20px",
                  ":hover": {
                    backgroundColor: COLORS.CRYSTAL,
                    opacity: [0.9, 0.8, 0.7],
                  },
                  height: "30px",
                  width: "100%",
                }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default SignUp;
