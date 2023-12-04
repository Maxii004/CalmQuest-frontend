import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Grid,
  Typography,
  Stack,
  Divider,
  Container,
  Avatar,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import useAxiosPrivate from "../hooks/use-axios-private";
import { toast } from "react-toastify";
import COLORS from "../base/constants/colors";
import { EditProfile, MentalStateChart } from "./components";

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const [authUser, setAuthUser] = useState({});
  const [updated, setUpdated] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [scores, setScores] = useState([]);
  //
  const handleClose = () => {
    setOpenEditProfile(false);
  };
  //
  const handleOpenEditModal = () => {
    setOpenEditProfile(true);
  };
  //
  const fetchUser = async () => {
    try {
      const { data } = await axiosPrivate.get(`/users/${id}`);
      setAuthUser(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchScores = async () => {
    try {
      const { data } = await axiosPrivate.get(`/users/${id}/questionnaire`);
      setScores(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  //
  useEffect(() => {
    if (updated) {
      fetchUser();
      setUpdated(false);
    }
  }, [updated]);
  //
  useEffect(() => {
    fetchUser();
    fetchScores();
  }, []);
  //
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "fit-content", mt: 2, mb: 2 }}
      px={{ xs: 0, lg: 2 }}
    >
      <EditProfile
        openDialog={openEditProfile}
        handleClose={handleClose}
        authUser={authUser}
        setUpdated={setUpdated}
      />
      <Grid
        container
        display="flex"
        spacing={2}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        p={5}
      >
        <Grid item xs={12} p={2} display={"flex"} flexDirection={"row"}>
          <Grid container display={"flex"} direction="row">
            <Grid item xs={2} justifyContent="center" alignItems="center">
              <Avatar
                alt={authUser?.name}
                sx={{
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "50%",
                  margin: "auto",
                  fontSize: 48,
                  mt: 3,
                  color: COLORS.DEEP_SPACE_SPARKLE,
                }}
              >
                {authUser?.name?.charAt(0)}
              </Avatar>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", lg: "block" },
                mt: "0.5rem",
                mb: "0.5rem",
              }}
            />
            <Grid item xs={2}>
              <Stack
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  color={COLORS.DEEP_SPACE_SPARKLE}
                  sx={{ fontWeight: "bold" }}
                >
                  Name:
                </Typography>
                <Typography
                  variant="h6"
                  color={COLORS.MOONSTONE}
                  sx={{ fontWeight: "bold" }}
                >
                  {authUser?.name}
                </Typography>
                <Typography
                  variant="h5"
                  color={COLORS.DEEP_SPACE_SPARKLE}
                  sx={{ fontWeight: "bold" }}
                >
                  Age:
                </Typography>
                <Typography
                  variant="h6"
                  color={COLORS.MOONSTONE}
                  sx={{ fontWeight: "bold" }}
                >
                  {authUser?.age}
                </Typography>
              </Stack>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", lg: "block" },
                mt: "0.5rem",
                mb: "0.5rem",
                mx: 1,
              }}
            />
            <Grid item xs={5}>
              <Stack
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  color={COLORS.DEEP_SPACE_SPARKLE}
                  sx={{ fontWeight: "bold", px: 1 }}
                >
                  Email:
                </Typography>
                <Typography
                  variant="h6"
                  color={COLORS.MOONSTONE}
                  sx={{ fontWeight: "bold" }}
                >
                  {authUser?.email}
                </Typography>
                <Typography
                  variant="h5"
                  color={COLORS.DEEP_SPACE_SPARKLE}
                  sx={{ fontWeight: "bold" }}
                >
                  Interests:
                </Typography>
                <Typography
                  variant="h6"
                  color={COLORS.MOONSTONE}
                  sx={{ fontWeight: "bold", wordBreak: "break-word" }}
                >
                  {authUser?.interests ? authUser?.interests?.join(", ") : "-"}
                </Typography>
              </Stack>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", lg: "block" },
                mt: "0.5rem",
                mb: "0.5rem",
                mx: 1,
              }}
            />
            <Grid item xs={2} display={"flex"} justifyContent={"center"}>
              {/* edit pen icons and the edit bold text */}
              <Stack
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                onClick={handleOpenEditModal}
                sx={{ cursor: "pointer" }}
              >
                <BorderColorIcon
                  sx={{ color: COLORS.DEEP_SPACE_SPARKLE }}
                  style={{ fontSize: "1.2rem" }}
                />
                <Typography
                  variant="h6"
                  color={COLORS.DEEP_SPACE_SPARKLE}
                  sx={{ fontWeight: "bold" }}
                >
                  Edit
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      />
      <MentalStateChart scores={scores} />
    </Container>
  );
};

export default Profile;
