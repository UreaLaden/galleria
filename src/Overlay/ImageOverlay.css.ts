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
    width:"94%",
    height:"80%",
    position:'absolute',
    top:'8%',
    left:'3%'
  },
  overlayImage: {
    width: "100%",
    height:"90%",
    position:"relative",
    bottom:"0",
    left:"0",
    "z-index": 150,
    display:'flex',
    alignContent:'center',
  },
  image:{
    width:"100%",
    objectFit:'contain'
  },
  closeButton: {
    position:"absolute",
    top:'0',
    right:'0',
    width:"max-content",
    color:Colors.WHITE,
    ...Fonts.Subhead1,
    letterSpacing:"4px",
    transition:"letter-spacing 200ms ease-in",
    ":hover":{
        letterSpacing:"12px",
        cursor:'pointer'
    }
  },
});
