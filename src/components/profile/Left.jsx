import { useSelector } from "react-redux";
import styles from "./Left.module.css";

const Left = () => {
  //getting loggedin user details
  const user = useSelector((state) => {
    return state.loggedUser;
  });

  return (
    <div className={styles.leftBox}>
      <div className={styles.userInfo}>
        <div className={styles.profilePicture}>
          <img src={user.profilepicture} alt="profilepicture" />
          <h2>{user.name}</h2>
        </div>
        <div className={styles.userData}>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>Username : </span>
            <p className={styles.value}> {user.username}</p>
          </div>

          <div className={styles.userInfoRow}>
            <span className={styles.label}>e-mail :</span>
            <p className={styles.value}>{user.email}</p>
          </div>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>phone :</span>
            <p className={styles.value}>{user.phone}</p>
          </div>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>website :</span>
            <p className={styles.value}>{user.website}</p>
          </div>
          <hr />
          <p>Company</p>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>name :</span>
            <p className={styles.value}>{user.name}</p>
          </div>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>catchphrase :</span>
            <p className={styles.value}>{user.company.catchPhrase}</p>
          </div>
          <div className={styles.userInfoRow}>
            <span className={styles.label}>bs :</span>
            <p className={styles.value}>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
