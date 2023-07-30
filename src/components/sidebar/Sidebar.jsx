import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
import { titleSlice } from "../../store/slices";

const Sidebar = () => {
  const dispatch = useDispatch();
  //array i have created to loop over it and to show options and pathname in sidebar
  const sideOptions = [
    { optionName: "Profile", pathname: "/profile" },
    { optionName: "Posts", pathname: "/posts" },
    { optionName: "Gallery", pathname: "/gallery" },
    { optionName: "Todo", pathname: "/todo" },
  ];

  // function is used to set the title of page in title component
  function handleTitle(res) {
    dispatch(titleSlice.actions.addtitle(res));
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarOptions}>
        {sideOptions.map((option) => (
          <NavLink
            key={option.pathname}
            to={option.pathname}
            activeClassName={styles.activeLink}
            className={(
              { isActive } //isActive is to get the active link from all the given links
            ) => (isActive ? styles.current : styles.link)}
          >
            <p onClick={() => handleTitle(option.optionName)}>
              <span>{option.optionName}</span>
              <span style={{ backgroundColor: "white", color: "black" }}>
                <KeyboardArrowRightIcon />
              </span>
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
