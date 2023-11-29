import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CalmQuest from "../base/assets/images/png/calm-quest.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../base/constants/routes";
import COLORS from "../base/constants/colors";

const LaunchPage = () => {
  const navigate = useNavigate();
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
      <Grid item justifyContent="center">
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              backgroundColor: COLORS.CRYSTAL,
              color: "white",
              width: "50vh",
              fontSize: "1rem",
              borderRadius: "20px",
              ":hover": {
                backgroundColor: COLORS.CRYSTAL,
                opacity: [0.9, 0.8, 0.7],
              },
              mb: 3,
            }}
            onClick={() => {
              navigate(ROUTES.LOGIN);
            }}
          >
            Sign In
          </Button>
        </Box>
      </Grid>
      <Grid item justifyContent="center" mb={3}>
        <Typography textAlign="center" color={COLORS.DEEP_SPACE_SPARKLE}>
          Don't have an account?
        </Typography>
      </Grid>
      <Grid item justifyContent="center">
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              backgroundColor: COLORS.CRYSTAL,
              color: "white",
              width: "50vh",
              fontSize: "1rem",
              borderRadius: "20px",
              ":hover": {
                backgroundColor: COLORS.CRYSTAL,
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() => navigate(ROUTES.SIGNUP)}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LaunchPage;
