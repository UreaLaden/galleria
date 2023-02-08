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
  const [imageHeight, setImageHeight] = React.useState<number>(0);
  const [imageWidth, setImageWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (!image) return;
    let img = document.createElement("img");
    img.src = image;
    document.body.appendChild(img);
    setImageHeight(img.naturalHeight);
    setImageWidth(img.naturalWidth);
    img.remove();
  }, [image]);

  const overlayStyles = {
    backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8),transparent),url(${image})`,
    height: `${imageHeight}px`,
    width: `${imageWidth}px`,
  };

  const onCardSelectedHandler = (_event: any) => {
    context.setCurrentPortrait(portrait);
  };

  let content = (
    <div className={styles.mainCardParent}>
      <div className={styles.mainCardContainer}>
        <div
          className={styles.overlay}
          style={overlayStyles}
          onClick={onCardSelectedHandler}
        >
          <Link to="/details">
            <h2 className={styles.title}>{imageTitle}</h2>
            <p className={styles.artist}>{artistName}</p>
          </Link>
        </div>
      </div>
    </div>
  );

  return content;
};

export default MainCard;
