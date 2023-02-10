import { Link } from "react-router-dom";
import { styles } from "./NavBar.css";

export const NavBar = (props: any) => {
  return (
    <div className={styles.navbarContainer}>
      <Link className={styles.headerLink} to="/">
        <h1 className={styles.header}>galleria.</h1>
      </Link>
      <div className={styles.slideshowButton}>START SLIDESHOW</div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default NavBar;
