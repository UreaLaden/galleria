import { styles } from "./NavBar.css";

export const NavBar = (props: any) => {
  return (
    <div className={styles.navbarContainer}>
      <h1 className={styles.header}>galleria.</h1>
      <div className={styles.slideshowButton}>START SLIDESHOW</div>
    </div>
  );
};

export default NavBar;
