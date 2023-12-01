import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Input,
  CircularProgress,
  Button,
} from "@mui/material";
import { io } from "socket.io-client";
import Lottie from "react-lottie";
import animationData from "../base/assets/animations/typing.json";
import useAuth from "../hooks/use-auth";
import useAxiosPrivate from "../hooks/use-axios-private";
import COLORS from "../base/constants/colors";
import { ChatDisplay, CommunityGuideLines } from "./components";
import "./styles.css";
import { toast } from "react-toastify";

const CalmCrew = () => {
  const { user } = useAuth();
  const { userId } = user;
  const axiosPrivate = useAxiosPrivate();
  //
  const ENDPOINT = process.env.REACT_APP_BACKEND_API;
  let socket = useRef(null);
  //
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  //
  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.current.emit("stop typing");
      try {
        setNewMessage("");
        const { data } = await axiosPrivate.post("/calm-crew", {
          author: userId,
          content: newMessage,
        });
        setMessages((prevMessages) => [...prevMessages, data]);
        console.log("socket", socket?.current?.id);
        socket.current.emit("sendMessage", data);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  //
  const fetchMessages = async () => {
    setIsLoading(true);
    socket.current.emit("joinRoom");
    const { data } = await axiosPrivate.get(`/calm-crew`);
    setMessages(data);
    setIsLoading(false);
  };
  //
  const communityGuideLines = () => {
    setOpenDialog(true);
  };

  //
  useEffect(() => {
    if (!socket.current) {
      socket.current = io(ENDPOINT);
      socket.current.emit("setup", user);
      fetchMessages();
      socket.current.on("connected", () => setSocketConnected(true));
      socket.current.on("typing", () => setIsTyping(true));
      socket.current.on("stop typing", () => setIsTyping(false));
      socket.current.on("message received", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
    // Cleanup function
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  //
  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.current.emit("typing");
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.current.emit("stop typing");
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <Box
      height={"120vh"}
      width={"100%"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      textAlign={"center"}
    >
      <Box
        mt={2}
        mx={"5%"}
        width={"90%"}
        textAlign={"justify"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Typography variant="h6" pt={2} color={COLORS.MOONSTONE}>
          Welcome to the Calm Crew, a supportive and safe community designed for
          everyone to connect and assist each other during challenging times.
          Here, you have the opportunity to engage with individuals who may have
          experienced similar or even more difficult situations. This platform
          encourages interaction, collective problem-solving, and mutual
          support, fostering an environment where new friendships can blossom.
          Remember, you are not alone in your journey. Let's embrace kindness
          and work through our challenges collectively, maintaining a happy and
          stress-free atmosphere.
        </Typography>
        <Button
          sx={{
            backgroundColor: COLORS.LAPIS_LAZULI,
            color: COLORS.WHITE,
            ":hover": {
              backgroundColor: COLORS.LAPIS_LAZULI,
              color: COLORS.CRYSTAL,
            },
            mt: 1,
            ml: "44%",
          }}
          onClick={communityGuideLines}
        >
          Community Guidelines
        </Button>
        <CommunityGuideLines
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "center",
          p: 3,
          bgcolor: COLORS.AURERISH_WHITE,
          mx: "25%",
          my: "2%",
          width: "50%",
          height: "65%",
          borderRadius: "5%",
          overflowY: "hidden",
        }}
      >
        <Box
          display={"flex"}
          p={1}
          mb={2}
          justifyContent={"center"}
          alignContent={"center"}
          bgcolor={COLORS.AURERISH_WHITE}
        >
          <Typography
            variant={"h5"}
            align={"center"}
            fontWeight={600}
            fontFamily={"Oregano, cursive"}
            sx={{ textShadow: "0px 0px 10px" }}
            color={COLORS.MOONSTONE}
          >
            Calm Crew
          </Typography>
        </Box>
        {isLoading ? (
          <CircularProgress
            size={"xl"}
            sx={{
              height: 70,
              width: 70,
              color: COLORS.MOONSTONE_BLUE,
              margin: "auto",
            }}
          />
        ) : (
          <div className="messages">
            <ChatDisplay messages={messages} />
          </div>
        )}
        <FormControl variant="filled">
          {isTyping && (
            <div>
              <Lottie
                options={defaultOptions}
                width={50}
                style={{
                  marginTop: 10,
                  marginBottom: 15,
                  marginLeft: 0,
                }}
                height={20}
              />
            </div>
          )}
          <Input
            placeholder="Type your message here..."
            onKeyDown={sendMessage}
            onChange={typingHandler}
            value={newMessage}
            sx={{
              pt: 1,
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default CalmCrew;
