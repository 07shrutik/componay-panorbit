import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import {
  loggedUserIndexSlice,
  loggedUserSlice,
  titleSlice,
} from "../../store/slices";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //this function used to navigate to particular user page and aslo used to  get the index of user who is logged in based on it i have shown other user, when user clicks on user name to signout
  function handleLogin(index) {
    dispatch(loggedUserSlice.actions.loggedUser(users[index]));
    dispatch(loggedUserIndexSlice.actions.loggedUserIndex(index));
    dispatch(titleSlice.actions.addtitle("Profile"));
    navigate("/profile");
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h2>Select a account</h2>
        </div>
        {users.map((user, index) => (
          <>
            <div className={styles.users}>
              <p onClick={() => handleLogin(index)}>
                {" "}
                <span>
                  <img src={user.profilepicture} alt="profilepicture" />
                  {user.name}
                </span>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
