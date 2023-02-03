import { Icon } from "@fluentui/react";
import { styles } from "./DetailsPage.css";
import FooterBar from "../FooterBar/FooterBar";
import ImageOverlay from "../Overlay/ImageOverlay";
import * as React from 'react';

export interface DetailsPageProps {
  portraitImage: string;
  artistImage: string;
  title: string;
  artistName: string;
  content: string;
  year: number;
  source: string;
}

export const DetailsPage = (props: DetailsPageProps) => {
  const [showOverlay,setShowOverlay] = React.useState<boolean>(false);

  const toggleOverlay = ()=>{
    setShowOverlay(!showOverlay);
  }


  return (
      <div className={styles.detailsContainer}>
        <div className={styles.displayContainer}>
          <div className={styles.mainImage}>
            <img
              className={styles.hero}
              src={props.portraitImage}
              alt={props.title}
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
              <div className={styles.titleHeader}>{props.title}</div>
              <div className={styles.artistName}>{props.artistName}</div>
            </div>
            <div className={styles.placeholder}></div>
            <div className={styles.artistImage}>
              <img
                className={styles.artist}
                src={props.artistImage}
                alt={props.artistName}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.year}>{props.year}</div>
          <div className={styles.content}>{props.content}</div>
          <a className={styles.source} href={props.source}>
            GO TO SOURCE
          </a>
        </div>
        <FooterBar />
      {showOverlay &&
        <ImageOverlay closeOverlay={toggleOverlay} />}
      </div>
  );
};

export default DetailsPage;
