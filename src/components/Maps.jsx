import { GoogleMap } from "@react-google-maps/api";
// import map from "../assets/map.jpg";
import styles from "./Maps.module.css";
const Maps = (props) => {
  const style = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: props.lat,
    lng: props.lng,
  };
  return (
    //MAP IS NOT SHOWN DUE TO PAYMENT ISSUE

    <div className={styles.map}>
      {props.isLoaded && (
        <GoogleMap
          mapContainerStyle={style}
          center={center}
          zoom={10}
        ></GoogleMap>
      )}
    </div>
  );
};

export default Maps;
