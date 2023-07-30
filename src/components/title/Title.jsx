import styles from "./Title.module.css";
// import logo from "../../assets/react.svg";
// import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { loggedUserIndexSlice, loggedUserSlice } from "../../store/slices";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.loggedUser;
  });
  const users = useSelector((state) => {
    return state.users;
  });
  const userIndex = useSelector((state) => {
    return state.userIndex;
  });
  console.log(users);
  const dispatch = useDispatch();
  const [moreUsers, setmoreUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (userIndex == users.length - 2) {
      setmoreUsers([users[users.length - 1], users[0]]);
    } else if (userIndex == users.length - 1) {
      setmoreUsers([users[0], users[1]]);
    } else {
      setmoreUsers(users.slice(userIndex + 1, userIndex + 3));
    }
    console.log(moreUsers);
  }, [user]);

  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    top: "40%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: "12px",
    // boxShadow: 0,
    p: 4,
  };

  function handleClick() {
    if (userIndex == users.length - 1) {
      dispatch(loggedUserIndexSlice.actions.loggedUserIndex(0));
      dispatch(loggedUserSlice.actions.loggedUser(users[0]));
    } else {
      dispatch(loggedUserIndexSlice.actions.loggedUserIndex(userIndex + 1));
      dispatch(loggedUserSlice.actions.loggedUser(users[userIndex + 1]));
    }
  }
  const title = useSelector((state) => state.title);
  return (
    <div className={styles.title}>
      <p>{title}</p>
      <span>
        <img src={user.profilepicture} alt="logo" />
        <p onClick={handleOpen}>{user.name}</p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modalBox}>
              <img
                src={user.profilepicture}
                alt="profilepic"
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
              />
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
            <div className={styles.moreUsers}>
              {moreUsers.map((user, index) => (
                <>
                  {index == 0 ? (
                    <p
                      onClick={handleClick}
                      style={{ width: "200px", fontSize: "14px" }}
                    >
                      <img
                        src={user.profilepicture}
                        alt="profilepic"
                        style={{ width: "35px", height: "35px" }}
                      />
                      {user.name}
                    </p>
                  ) : (
                    <p>
                      <img src={user.profilepicture} alt="profilepic" />
                      {user.name}
                    </p>
                  )}
                </>
              ))}
            </div>
            <button className={styles.btn} onClick={() => navigate("/")}>
              Sign out
            </button>
          </Box>
        </Modal>
      </span>
    </div>
  );
};

export default Title;
