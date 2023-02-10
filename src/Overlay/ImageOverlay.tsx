import * as React from "react";
import { styles } from "./ImageOverlay.css";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";

interface ImageOverlayProps {
  closeOverlay: () => void;
}

export const ImageOverlay = (props: ImageOverlayProps) => {
  const [displayImage, setDisplayImage] = React.useState<string | undefined>(
    ""
  );
  const context = React.useContext<PortraitContextProps>(PortraitContext);
  React.useEffect(() => {
      setDisplayImage(context.portrait?.images.gallery)
  },[]);

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.overlayImage}>
        <div className={styles.modalContainer}>
        <div className={styles.closeButton} onClick={props.closeOverlay}>CLOSE</div>
          <img className={styles.image} src={displayImage} alt={displayImage} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
