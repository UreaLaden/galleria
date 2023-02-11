import { Link } from "react-router-dom";
import { styles } from "./NavBar.css";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";
import * as React from "react";

export const NavBar = (props: any) => {
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  const onSlideShowActivated = () => {
    context.startSlideshow();
  };

  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.headerLink} to="/">
        <h1 className={styles.header}>galleria.</h1>
      </Link>
      <div className={styles.slideshowButton} onClick={onSlideShowActivated}>
        <Link className={styles.slideshowButtonLink} to="/details">START SLIDESHOW</Link>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default NavBar;
