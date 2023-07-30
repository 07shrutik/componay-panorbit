import { useSelector } from "react-redux";
import styles from "./Right.module.css";
import { useJsApiLoader } from "@react-google-maps/api";
import Maps from "../Maps";

const Right = () => {
  //getting loggedin user details
  const user = useSelector((state) => {
    return state.loggedUser;
  });

  //this is the map constraints that are required to load the map
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyDGjCNg5noHNX_csQdR6gPUNTIFwJnIod0",
    googleMapsApiKey: "AIzaSyDGjCNg5noHNX_csQdR6gPUNTIFwJnIod0",
  });
  return (
    <div className={styles.rightContainer}>
      <p>Address :</p>
      <div className={styles.rightBox}>
        <div className={styles.userInfoRow}>
          <span className={styles.label}>Street :</span>
          <p className={styles.value}>{user.address.street}</p>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.label}>Suite :</span>
          <p className={styles.value}>{user.address.suite}</p>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.label}>City :</span>
          <p className={styles.value}>{user.address.city}</p>
        </div>
        <div className={styles.userInfoRow}>
          <span className={styles.label}>Zipcode :</span>
          <p className={styles.value}>{user.address.zipcode}</p>
        </div>
      </div>
      <div className={styles.mapImage}>
        {/* DUE TO BILLING(PAYMENT) ISSUE MAP IS NOT SHOWING PROPERLY */}
        <Maps
          isLoaded={isLoaded}
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
        />
      </div>
      <p>PS: map may not get loaded due to payment/billing issue</p>
      <div className={styles.geo}>
        <p>Lat :{user.address.geo.lat}</p>
        <p>Lang :{user.address.geo.lng}</p>
      </div>
    </div>
  );
};

export default Right;
