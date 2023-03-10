import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.9)",
    "z-index": 100,
  },
  imageContainer: {
    width: "94%",
    height: "80%",
    position: "absolute",
    top: "8%",
    left: "3%",
  },
  overlayImage: {
    width: "100%",
    height: "90%",
    position: "relative",
    bottom: "0",
    left: "0",
    "z-index": 150,
    display: "flex",
    alignContent: "center",
  },
  image: {
    width: "auto",
    height: "auto",
  },
  arrow:{
    g:{
      stroke:Colors.WHITE
    }
  },
  modalContainer: {
    width: "auto",
    height: "auto",
    position: "relative",
    margin: "0 auto",
  },
  fadeItem: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
  },
  stopButton:{
      position: "absolute",
      width: "max-content",
      color: Colors.WHITE,
      ...Fonts.Subhead1,
      textShadow:'none',
      transition: "text-shadow 200ms ease-in",
      "@media screen and (min-width:980px)": {
        bottom: 0,
        left:'50%'
      },
      "@media screen and (max-width:980px)": {
        bottom: "0",
      },
      ":hover": {
        textShadow:"2px 5px 5px red",
        cursor: "pointer",
      },
  },
  closeButton: {
    position: "absolute",
    width: "max-content",
    color: Colors.WHITE,
    ...Fonts.Subhead1,
    letterSpacing: "4px",
    transition: "letter-spacing 200ms ease-in",
    "@media screen and (min-width:980px)": {
      top: -50,
      right: 0,
    },
    "@media screen and (max-width:980px)": {
      top: "0",
      right: "0",
    },
    ":hover": {
      letterSpacing: "12px",
      cursor: "pointer",
    },
  },
});
