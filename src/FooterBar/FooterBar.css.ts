import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position:'relative',
    borderTop: `3px solid ${Colors.GREY2}`,
    gridRow: "2 / 3 ",
    "@media screen and (min-width:1440px)":{
      gridColumn:"1 / span 2",
      padding: "0 1%",
    },
    "@media screen and (max-width:1440px)":{
      gridRow:"3 / span 1",
      gridColumn:"1 / -1",
      display:'grid',
      gridTemplate:"repeat(4,.25fr) / repeat(20,1fr)"
    },
    "@media screen and (max-width:750px)":{}
  },
  footerDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    justifyContent: "space-around",
    height: "50%",
    "@media screen and (max-width:1440px)":{
      gridRow:"1 / span 4",
      gridColumn:"2 / span 4",
      
    },
  },
  title: {
    ...Fonts.Heading3,
    fontWeight: "bold",
},
artist: {
    ...Fonts.Subhead2,
  },
  previousIcon: {
    ":hover": {
      cursor: "pointer",
      g: {
        stroke: Colors.GREY3,
      },
    },
  },
  nextIcon: {
    ":hover": {
      cursor: "pointer",
      g: {
        stroke: Colors.GREY3,
      },
    },
  },
  disabledIcon:{
    pointerEvents:'none',
    g:{
        stroke:Colors.GREY3
    }
  },
  navigationContainer: {
    width: "6%",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width:1440px)":{
      gridRow:"1 / span 4",
      gridColumn:"18 / 20",
      display:'flex',
      width:"100%"
    },
  },
  progressBar:{
    position:'absolute',
    width:'10%',
    borderTop:`3px solid ${Colors.BLACK}`,
    top:"-2.8px",
    left:0
  }
});
