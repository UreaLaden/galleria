import React from "react";
import { styles } from "./MainCard.css";
import { PortraitContext } from "../store/portraitContext";
import { Portrait } from "../utils/helpers";
import { Link } from "react-router-dom";

export interface MainCardProps {
  imageTitle?: string;
  artistName?: string;
  image?: string;
  portrait: Portrait;
}

export const MainCard = (props: MainCardProps) => {
  const context = React.useContext(PortraitContext);
  const { imageTitle, artistName, image, portrait } = props;

  const onCardSelectedHandler = (_event: any) => {
    context.setCurrentPortrait(portrait);
  };

  let content = (
    <>
      <div className={styles.overlay} onClick={onCardSelectedHandler}>
        <Link to="/details" className={styles.overlayLink}>
          <img className={styles.image} src={image} alt={imageTitle} />
          <div className={styles.details}>
            <h2 className={styles.title}>{imageTitle}</h2>
            <p className={styles.artist}>{artistName}</p>
          </div>
        </Link>
      </div>
    </>
  );

  return content;
};

export default MainCard;
