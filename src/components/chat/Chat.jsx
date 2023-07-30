import { useState } from "react";
import styles from "./Chat.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useSelector } from "react-redux";
const Chat = () => {
  //getting array of user that we got fetching given API
  const users = useSelector((state) => {
    return state.users;
  });
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.chatContainer}>
      <p>
        <span>
          <ChatBubbleOutlineIcon />
          Chats
        </span>
        <span onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </p>
      <div
        //used conditional operators for handling display or structure of chat box
        className={`${styles.chatBox} ${
          open ? styles.active : styles.nonactive
        }`}
        style={{ height: open ? "auto" : "200px" }}
      >
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <div className={styles.userInfo}>
                <img src={user.profilepicture} alt="profilepic" />
                <span>{user.name}</span>
              </div>
              <span>
                {/* showing who is online and who is offline , showing even index user as active and odd as offline */}
                <FiberManualRecordIcon
                  style={{
                    color: index % 2 === 0 ? "#14d21f" : "lightgrey",
                    fontSize: "16px",
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
