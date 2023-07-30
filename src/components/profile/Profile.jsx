import styles from "./Profile.module.css";

import Right from "./Right";
import Left from "./Left";
import Sidebar from "../sidebar/Sidebar";
import Title from "../title/Title";
import Chat from "./../chat/Chat";

const Profile = () => {
  return (
    <>
      {/* Page that combines the component to form Profile page */}
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContentContainer}>
          <Title />
          <div className={styles.profileContainer}>
            <Left />
            <Right />
          </div>
        </div>
      </div>
      {/* chat section */}
      <footer>
        <Chat />
      </footer>
    </>
  );
};

export default Profile;
