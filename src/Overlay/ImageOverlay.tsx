import * as React from "react";
import { styles } from "./ImageOverlay.css";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Icon } from "@fluentui/react";

export const ImageOverlay = () => {
  const [displayImage, setDisplayImage] = React.useState<string | undefined>(
    ""
  );
  const context = React.useContext<PortraitContextProps>(PortraitContext);
  React.useEffect(() => {
    setDisplayImage(context.portrait?.images.gallery);
  }, [context.portrait?.images.gallery]);
  const [overlayButtonText, setOverlayButtonText] =
    React.useState<string>("CLOSE");

  React.useEffect(() => {
    setOverlayButtonText((text) =>
      context.slideshowActive ? "STOP " : "CLOSE"
    );
  }, [context.portrait, context.slideshowActive]);

  const toggleOverlay = () => {
    if (context.slideshowActive) {
      context.stopSlideshow();
    } else {
      context.showOverlay();
    }
  };

  const onChangeHandler = () => {
    context.setNextPortrait();
  }

  let content = context.slideshowActive ? (
    <div className={styles.overlayContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.overlayImage}>
          <div className={'slide-container'} style={{position:'relative'}}>
            <div className={styles.stopButton} onClick={toggleOverlay}>
              {overlayButtonText}
            </div>
            <Fade
            prevArrow={<Icon className={styles.arrow} iconName={"back-button"}/>}
            nextArrow={<Icon className={styles.arrow} iconName={"next-button"}/>}
            duration={3000}
            onChange={onChangeHandler}
            >              
              {context.portraits.map((portrait, index) => (
                <div className={styles.fadeItem} key={index}>
                  <img
                    className={styles.image}
                    src={portrait.images.gallery}
                    alt={portrait.name}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.overlayContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.overlayImage}>
          <div className={styles.modalContainer}>
            <div className={styles.closeButton} onClick={toggleOverlay}>
              {overlayButtonText}
            </div>
            <img
              className={styles.image}
              src={displayImage}
              alt={displayImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
  return content;
};

export default ImageOverlay;
