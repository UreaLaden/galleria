import { Icon } from "@fluentui/react";
import { styles } from "./FooterBar.css";

export const FooterBar = (props: any) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.artist}>Artist Name</div>
      </div>
      <div className={styles.navigationContainer}>
        <Icon className={styles.previousIcon} iconName={"back-button"} />
        <Icon className={styles.nextIcon} iconName={"next-button"}/>
      </div>
    </div>
  );
};

export default FooterBar;
