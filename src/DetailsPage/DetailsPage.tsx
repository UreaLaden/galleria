import { Icon } from "@fluentui/react";
import { styles } from "./DetailsPage.css";
import FooterBar from "../FooterBar/FooterBar";
import ImageOverlay from "../Overlay/ImageOverlay";
import * as React from "react";
import { Portrait } from "../utils/helpers";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";
import Slideshow from "../Slideshow/Slideshow";

export const DetailsPage = () => {
  const [currentPortrait, setCurrentPortrait] = React.useState<
    Portrait | undefined
  >(undefined);
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  React.useEffect(() => {
    setCurrentPortrait(context.portrait);
  }, [context.portrait]);

  const toggleOverlay = () => {
    context.showOverlay();
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.displayContainer}>
        <div className={styles.mainImage}>
          <img
            className={styles.hero}
            src={currentPortrait?.images.heroLarg}
            alt={currentPortrait?.name}
          />
          <div className={styles.imageView}>
            <button className={styles.overlayButton} onClick={toggleOverlay}>
              <Icon className={styles.overlayIcon} iconName={"view-image"} />
              <div className={styles.overlayText}>VIEW IMAGE</div>
            </button>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <div className={styles.titleHeader}>{currentPortrait?.name}</div>
            <div className={styles.artistName}>
              {currentPortrait?.artist.name}
            </div>
          </div>
          <div className={styles.placeholder}></div>
          <div className={styles.artistImage}>
            <img
              className={styles.artist}
              src={currentPortrait?.artist.image}
              alt={currentPortrait?.artist.name}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.year}>{currentPortrait?.year}</div>
        <div className={styles.content}>{currentPortrait?.description}</div>
        <a className={styles.source} href={currentPortrait?.source}>
          GO TO SOURCE
        </a>
      </div>
      <FooterBar />
      {context.overlayActive && <ImageOverlay />}
    </div>
  );
};

export default DetailsPage;
