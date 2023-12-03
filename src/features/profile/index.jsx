import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Grid,
  // Typography,
  // Box,
  // Stack,
  // Divider,
  Container,
  Avatar,
} from "@mui/material";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import useAxiosPrivate from "../hooks/use-axios-private";
import { toast } from "react-toastify";

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [authUser, setAuthUser] = useState({});
  //
  const fetchUser = async () => {
    try {
      const { data } = await axiosPrivate.get(`/users/${id}`);
      setAuthUser(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  //
  useEffect(() => {
    fetchUser();
  }, []);
  //
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "fit-content", mt: 2, mb: 2 }}
      px={{ xs: 0, lg: 2 }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Avatar
            alt={authUser?.name}
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            {authUser?.name?.charAt(0)}
          </Avatar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
