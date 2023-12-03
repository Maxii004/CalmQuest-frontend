import { useEffect, useRef, useState } from "react";
import {
  Box,
  FormControl,
  Input,
  CircularProgress,
  Button,
} from "@mui/material";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import animationData from "../base/assets/animations/typing.json";
import useAuth from "../hooks/use-auth";
import useAxiosPrivate from "../hooks/use-axios-private";
import COLORS from "../base/constants/colors";
import { ChatDisplay, DescriptionDialog } from "./components";
import { DEPRESSION_SEVERITY } from "../base/constants/depression-severity";

const ZenBud = () => {
  const { user } = useAuth();
  const { userId } = user;
  const axiosPrivate = useAxiosPrivate();
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
  const [authUser, setAuthUser] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [triggerResponse, setTriggerResponse] = useState(false);
  const endOfMessagesRef = useRef(null);
  //
  const handleClose = () => {
    setOpenDialog(false);
  };
  //
  const fetchUser = async () => {
    const { data } = await axiosPrivate.get(`/users/${userId}`);
    setAuthUser(data);
  };
  //
  const sendUserMessage = async (event) => {
    if (
      (event.key === "Enter" || event.target.textContent === "Send") &&
      newMessage
    ) {
      try {
        setNewMessage("");
        const { data } = await axiosPrivate.post(`/zen-bud/${userId}`, {
          author: userId,
          content: newMessage,
        });
        setChatMessages([...chatMessages, data]);
        setIsTyping(true);
        setTriggerResponse(true);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  //
  const sendZenBudMessages = async (message) => {
    const zenBudMessage = {
      receiver: userId,
      content: message,
    };
    try {
      const { data } = await axiosPrivate.post(`/zen-bud`, zenBudMessage);
      setChatMessages((prevMessages) => [...prevMessages, data]);
      setIsTyping(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  //
  const gettingZenBudResponse = async (severity, interests) => {
    if (!Object.values(DEPRESSION_SEVERITY).includes(severity)) {
      severity = `not given since the user hasn't attempt the questionnaire at least once`;
    }
    if (interests.length <= 0) {
      interests = `not given since the user hasn't updated his/her profile`;
    } else interests = interests.join(", ");
    //
    const systemMessage = {
      role: "system",
      content: `You are ZenBud, a compassionate and empathetic chatbot developed for CalmQuest, a web app dedicated to helping individuals with depression. Your primary role is to offer a secure, non-judgmental environment for users to express their feelings, seek support, and find relief from stress. If you have no previous messages with the user. Start by Introducing yourself and greeting them.

      You are designed to interact with users of varying depression severities, from 'None-minimal' to 'Severe.' Tailor your responses accordingly, providing gentle encouragement and understanding. For those with minimal to mild depression, focus on daily well-being and gentle prompts to discuss any concerns. In cases of moderate to severe depression, emphasize the importance of professional support and direct users to the 'Helplines' page for resources.
    
      Regularly encourage users to complete questionnaires on the 'Home' page and update their interests on the 'Profile' page, enabling you to offer more personalized and relevant support. Actively promote the 'CalmQuest Community' page as a platform for peer support and shared experiences. Actively promote the 'Helplines' page the user asks for any professional help tell him/her to go to. Do not provide any other links or contact numbers. Always remember you are communicating with users who live in Sri Lanka. Therefore providing contact numbers or links to websites that are not Sri Lankan institutes or communites will be useless.
    
      Ensure all interactions are positive, uplifting, and empathetic. Avoid any content that could be perceived as negative, harmful, or violent. Do not provide medical or therapeutic advice, but rather focus on emotional support and guiding users to appropriate resources within the app.
    
      Be attentive to keywords in user responses that indicate their emotional state and tailor your interactions to help guide them towards expressing themselves and finding a positive mindset. Always remind users that while ZenBud is a supportive tool, the best course of action for severe or persistent issues is seeking help from mental health professionals.

      Also don't provide very long answers to the user. Try to keep it short and simple as possible.

      Don't disrespect the user by sayin "As an AI, I don't experience emotions" when he/she thanks you. Just appreciate it.
      
      The user's current depression severity is ${severity} and his/her interests are ${interests}`,
    };
    //
    const gptMessages = chatMessages.map((message) => {
      if (message?.author === "ZenBud") {
        return {
          role: "assistant",
          content: message?.content,
        };
      } else {
        return {
          role: "user",
          content: message?.content,
        };
      }
    });
    //
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...gptMessages, // The messages from our chat with ChatGPT
      ],
    };
    //
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      )
        .then((data) => data.json())
        .then((data) => {
          return data.choices[0].message.content;
        });
      await sendZenBudMessages(response);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  //
  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosPrivate.get(`/zen-bud/${userId}`);
      setChatMessages(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  //
  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!typing) {
      setTyping(true);
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        setTyping(false);
      }
    }, timerLength);
  };
  //
  useEffect(() => {
    fetchMessages();
    fetchUser();
  }, []);
  //
  useEffect(() => {
    if (triggerResponse) {
      gettingZenBudResponse(
        authUser?.latestDailyAverageScore?.depressionSeverity,
        authUser?.interests
      );
      setTriggerResponse(false);
    }
  }, [chatMessages]);
  //
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <Box
      sx={{
        mx: 1,
        maxWidth: "xl",
        height: "85vh",
        justifyContent: "center",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <DescriptionDialog openDialog={openDialog} handleClose={handleClose} />
      <Box
        sx={{
          height: "75vh",
          overflowY: "auto",
          border: "1px solid #ccc",
          justifyContent: "center",
          alignContent: "center",
          padding: 2,
          marginTop: 1,
          marginBottom: 1,
          bgcolor: COLORS.AURERISH_WHITE,
        }}
      >
        {isLoading ? (
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CircularProgress
              size={"xl"}
              sx={{
                height: 150,
                width: 150,
                color: COLORS.MOONSTONE_BLUE,
                margin: "auto",
              }}
            />
          </div>
        ) : (
          <div>
            <ChatDisplay messages={chatMessages} />
            <div ref={endOfMessagesRef} />
          </div>
        )}
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
      </Box>
      <FormControl sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", bgcolor: COLORS.AURERISH_WHITE, p: 1 }}>
          <Input
            fullWidth
            placeholder="Type your message..."
            value={newMessage}
            onChange={typingHandler}
            onKeyDown={sendUserMessage}
          />
          <Button
            variant="contained"
            onClick={sendUserMessage}
            sx={{
              ml: 2,
              bgcolor: COLORS.MOONSTONE,
              ":hover": { bgcolor: COLORS.MOONSTONE, color: COLORS.CRYSTAL },
            }}
          >
            Send
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default ZenBud;
