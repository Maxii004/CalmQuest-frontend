import useAuth from "../../../hooks/use-auth";
import { isSameUser } from "../../../base/utils/chat-logics";
import COLORS from "../../../base/constants/colors";

const ChatDisplay = ({ messages }) => {
  const { user } = useAuth();
  return (
    <>
      {messages?.map((message, i) => (
        <div style={{ display: "flex" }} key={message?._id}>
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
              marginTop: isSameUser(messages, message, i, user?.userId)
                ? 3
                : 10,
              borderRadius: "20px",
              padding: "5px 15px",
              width: "100%",
              display: "inline-block",
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
