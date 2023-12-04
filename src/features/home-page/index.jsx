import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  Slide,
  Button,
  Fade,
} from "@mui/material";
import CalmQuest from "../base/assets/images/png/calm-quest.png";
import BackGroundImage from "../base/assets/images/jpg/backgroundimage1.jpg";
import Questionnaire from "../questionnaire";
import COLORS from "../base/constants/colors";
import useAuth from "../hooks/use-auth";
import useAxiosPrivate from "../hooks/use-axios-private";
import moment from "moment";
import { ISO_WITHOUT_TIME } from "../base/constants/date-formatting";
//
const HomePage = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  //
  const [authUser, setAuthUser] = useState({});
  const [showImage, setShowImage] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [openQuestionnaire, setOpenQuestionnaire] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);
  //
  const handleOnClick = () => {
    handleAlreadyAttemptedQuiz();
    setOpenQuestionnaire(true);
    setOnSubmit(false);
  };
  //
  const handleOnClose = () => {
    setOpenQuestionnaire(false);
    if (!attempted && onSubmit) {
      setAttempted(true);
    }
  };

  const getAuthUser = async () => {
    const { data } = await axiosPrivate.get(`/users/${user?.userId}`);
    setAuthUser(data);
  };

  const handleAlreadyAttemptedQuiz = async () => {
    if (
      authUser?.latestDailyAverageScore &&
      moment(authUser?.latestDailyAverageScore?.date).format(
        ISO_WITHOUT_TIME
      ) === moment(new Date()).format(ISO_WITHOUT_TIME)
    ) {
      setAttempted(true);
    }
  };

  useEffect(() => {
    // Start the first transition immediately
    setShowImage(true);
    // Start the second transition after 750ms
    const textBoxTimeout = setTimeout(() => setShowTextBox(true), 1250);
    // Start the third transition after 750ms + 1500ms = 2250ms
    const buttonTimeout = setTimeout(() => setShowButton(true), 1750);

    return () => {
      clearTimeout(textBoxTimeout);
      clearTimeout(buttonTimeout);
    };
  }, []);
  //
  useEffect(() => {
    getAuthUser();
  }, [attempted]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${BackGroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box height="90.75vh">
        <Grid container display="flex" direction="row">
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            height="90.75vh"
            justifyContent="center"
            alignContent="center"
            textAlign="center"
          >
            <Slide direction="up" in={showImage} timeout={1000}>
              <Box
                bgcolor={COLORS.CRYSTAL}
                mt="10%"
                ml="17%"
                borderRadius="50%"
                height={500}
                width={500}
                sx={{ boxShadow: 20 }}
              >
                <img src={CalmQuest} alt="launch-page" />
              </Box>
            </Slide>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            height="90.75vh"
            textAlign="center"
          >
            <Fade in={showTextBox}>
              <Box
                sx={{
                  border: `2px solid ${COLORS.MOONSTONE}`,
                  borderRadius: "5%",
                  mt: "15%",
                  p: 2,
                  ml: "10%",
                  width: "50%",
                  bgcolor: COLORS.FADED_WHITE,
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color={COLORS.MOONSTONE}
                    fontWeight={500}
                  >
                    Welcome to CalmQuest!
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    // fontFamily="Roboto, Helvetica,Arial,sans-serif"
                    sx={{
                      wordBreak: "break-word",
                      color: COLORS.LAPIS_LAZULI,
                    }}
                  >
                    CalmQuest is a web app dedicated to help individuals having
                    a rough time with their mental health to boost up their
                    mental wellness by analyzing your mental state and helping
                    you open up to the troubles that are the source of your
                    discomfort so that you can let go and relax. Help us analyze
                    your mental state by filling out the questionnaire below.
                  </Typography>
                </Box>
              </Box>
            </Fade>
            <Slide in={showButton} direction="up">
              <Box mt={1} ml="12%" width="50%">
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: COLORS.MOONSTONE,
                    borderRadius: 5,
                    color: "white",
                    ":hover": {
                      bgcolor: COLORS.MOONSTONE_BLUE,
                    },
                  }}
                  onClick={handleOnClick}
                >
                  <Typography variant="h6">Take the Questionnaire</Typography>
                </Button>
              </Box>
            </Slide>
            <Questionnaire
              openDialog={openQuestionnaire}
              handleOnClose={handleOnClose}
              hasAttempted={attempted}
              setOnSubmit={setOnSubmit}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
//
export default HomePage;
