import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../context/authProvider";
import loginValidation from "../validations/login-validation";
import axios from "../../../api/axios";
import CalmQuest from "../../base/assets/images/png/calm-quest.png";
import ROUTES from "../../base/constants/routes";
import COLORS from "../../base/constants/colors";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth, setUser } = useContext(AuthContext);
  //
  return (
    <Grid
      container
      sx={{
        backgroundColor: COLORS.WATER,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignContent="center"
        maxWidth="380px"
        maxHeight="380px"
      >
        <img src={CalmQuest} alt="logo" />
      </Grid>
      <Grid item display="flex" flexDirection="column" justifyContent="center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidation}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await axios.post("/auth/login", {
                email: values?.email,
                password: values?.password,
              });
              setAuth({ accessToken: response?.data?.accessToken });
              const decoded = jwtDecode(response?.data?.accessToken);
              setUser({
                userId: decoded?.userId,
                name: decoded?.userName,
                email: decoded?.userEmail,
              });
              resetForm();
              toast.success("Login Sccessful!");
              navigate(ROUTES.HOME, { replace: true });
            } catch (error) {
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
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Login;
