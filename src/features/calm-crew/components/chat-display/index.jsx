import { Tooltip, Avatar } from "@mui/material";
import useAuth from "../../../hooks/use-auth";
// import ScrollableFeed from "react-scrollable-feed";
import {
  isSameUser,
  isSameSenderMargin,
  isLastMessage,
  isSameSender,
} from "../../../base/utils/chat-logics";
import COLORS from "../../../base/constants/colors";

const ChatDisplay = ({ messages }) => {
  const { user } = useAuth();
  return (
    // <ScrollableFeed>
    <>
      {messages?.map((message, i) => (
        <div style={{ display: "flex" }} key={message?._id}>
          {(isSameSender(messages, message, i, user?.userId) ||
            isLastMessage(messages, i, user?.userId)) && (
            <Tooltip
              title={`${message?.author?.name}`}
              placement="top-start"
              arrow
            >
              <Avatar
                sx={{
                  mt: "7px",
                  mr: 1,
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                {message?.author?.name?.charAt(0).toUpperCase()}
              </Avatar>
            </Tooltip>
          )}
          <span
            style={{
              backgroundColor: `${
                message?.author?._id === user?.userId
                  ? COLORS.CRYSTAL
                  : COLORS.MOONSTONE
              }`,
              color:
                message?.author?._id !== user?.userId
                  ? COLORS.WHITE
                  : COLORS.DEEP_SPACE_SPARKLE,
              marginLeft: isSameSenderMargin(
                messages,
                message,
                i,
                user?.userId
              ),
              marginTop: isSameUser(messages, message, i, user?.userId)
                ? 3
                : 10,
              borderRadius: "20px",
              padding: "5px 15px",
              maxWidth: "75%",
              wordBreak: "break-word",
              textAlign: "left",
            }}
          >
            {message?.content}
          </span>
        </div>
      ))}
    </>
  );
};

export default ChatDisplay;
