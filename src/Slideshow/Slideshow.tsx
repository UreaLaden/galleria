import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import * as React from "react";
import { PortraitContext, PortraitContextProps } from "../store/portraitContext";

const Slideshow = () => {
    const context = React.useContext<PortraitContextProps>(PortraitContext);
  return (
    <div className="slide-container">
      <Slide>
        {context.portraits.map((portrait, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${portrait.images.gallery})` }}
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
