import { Icon } from "@fluentui/react";
import { styles } from "./FooterBar.css";
import * as React from "react";
import { PortraitContext } from "../store/portraitContext";
import { Portrait } from "../utils/helpers";

export const FooterBar = (props: any) => {
  const context = React.useContext(PortraitContext);
  const [currentPortrait,setCurrentPortrait] = React.useState<Portrait | undefined>(undefined);
  const [progressBarWidth,setProgressBarWidth] = React.useState<number>(-1)

   React.useEffect(() => {
    setCurrentPortrait(context.portrait);    
  },[context.portrait]);

  const previousButtonClickedHandler = () => {
    context.setPreviousPortrait();
  };

  const nextButtonClickedHandler = () => {
    context.setNextPortrait();
  };

  React.useMemo(()=>{
    if(currentPortrait === undefined) return;
    const width = (currentPortrait.index + 1) * (100 / context.portraits.length);
    setProgressBarWidth(width);
  },[currentPortrait])



  const content = currentPortrait ? (
    <div className={styles.footerContainer}>
      <div className={styles.footerDetailsContainer}>
        <div className={styles.title}>{currentPortrait.name}</div>
        <div className={styles.artist}>{currentPortrait.artist.name}</div>
      </div>
      <div className={styles.navigationContainer}>
        <Icon
          className={context.previousPortrait === undefined ? styles.disabledIcon : styles.previousIcon}
          iconName={"back-button"}
          onClick={previousButtonClickedHandler}
        />
        <Icon
          className={context.nextPortrait === undefined ? styles.disabledIcon : styles.nextIcon}
          iconName={"next-button"}
          onClick={nextButtonClickedHandler}
        />
      </div>
      <div className={styles.progressBar} style={{width:`${progressBarWidth}%`}}></div>
      <div className={styles.divider} ></div>
    </div>
  ) : (
    <div>Nothin to see here</div>
  );
  return content;
};

export default FooterBar;
