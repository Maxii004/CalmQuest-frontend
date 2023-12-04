import {
  Dialog,
  DialogTitle,
  TextField,
  Container,
  Button,
} from "@mui/material";
import useAxiosPrivate from "../../../hooks/use-axios-private";
import COLORS from "../../../base/constants/colors";
import { Form, Formik, Field } from "formik";
import { editProfileValidationSchema } from "./validations/edit-profile-validation";
import { toast } from "react-toastify";

const EditProfile = ({ authUser, openDialog, handleClose, setUpdated }) => {
  const axiosPrivate = useAxiosPrivate();
  //
  return (
    <Dialog open={openDialog} onClose={handleClose} maxWidth="xl">
      <DialogTitle align="center" color={COLORS.MOONSTONE} fontWeight={600}>
        Edit Profile
      </DialogTitle>
      <Formik
        initialValues={{
          name: authUser?.name,
          age: authUser?.age,
          interests: authUser?.interests?.join(", "),
        }}
        validationSchema={editProfileValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const updatedUser = {
            name: values?.name,
            age: values?.age,
            interests: values?.interests?.split(", "),
          };
          try {
            const { data } = await axiosPrivate.patch(
              `/users/${authUser?._id}`,
              updatedUser
            );
            setUpdated(true);
            toast.success("Profile Updated!");
            resetForm();
            handleClose();
          } catch (error) {
            toast.error(error?.response?.data?.message);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          resetForm,
          isSubmitting,
          errors,
          touched,
        }) => (
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                sx={{ width: "80%", mb: 2 }}
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
                sx={{ width: "80%", mb: 2 }}
              />
              <Field
                as={TextField}
                label="Interests"
                name="interests"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.interests && errors.interests)}
                helperText={
                  (touched.interests && errors.interests) ||
                  "Seperate each interest with a comma"
                }
                value={values.interests}
                variant="filled"
                sx={{ width: "80%", mb: 2 }}
              />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    my: 2,
                    ml: "80%",
                    backgroundColor: COLORS.LAPIS_LAZULI,
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        )}
      </Formik>
    </Dialog>
  );
};

export default EditProfile;
