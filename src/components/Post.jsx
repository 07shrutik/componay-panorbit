import styles from "./Post.module.css";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";
import Title from "./title/Title";

const Post = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContentContainer}>
          <Title />
          <div className={styles.post}>
            <h1>Coming Soon</h1>
          </div>
        </div>
      </div>
      <footer>
        <Chat />
      </footer>
    </>
  );
};

export default Post;
