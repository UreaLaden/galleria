import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position:'relative',
    "@media screen and (min-width:980px)":{
      gridRow: "1 / 3 ",
      gridColumn:"1 / span 2",
      display:'grid',
      gridTemplate:"repeat(9,1fr) / repeat(7,1fr)"
    },
    "@media screen and (max-width:980px)":{
      borderTop: `3px solid ${Colors.GREY2}`,
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
    "@media screen and (min-width:980px)":{
      gridRow:"9 / span 1"
    },
    "@media screen and (max-width:980px)":{
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
    display: "flex",
    "@media screen and (min-width:980px)":{
      gridRow:"9 / span 1",
      gridColumn:"7 / span 1",
      width:"100%",
      justifyContent:"space-around"
    },
    "@media screen and (max-width:980px)":{
      justifyContent: "space-between",
      gridRow:"1 / span 4",
      gridColumn:"18 / 20",
      display:'flex',
      width:"100%"
    },
  },
  divider:{
    "@media screen and (min-width:980px)":{
      borderBottom: `3px solid ${Colors.GREY2}`,
      height:"100%",
      gridRow:" 8 / 9",
      gridColumn:"1 / span 7",
      
    },
    "@media screen and (max-width:980px)":{
      display:'none'
    },
  },
  progressBar:{
    borderTop:`3px solid ${Colors.BLACK}`,
    position:'absolute',
    width:'10%',
    top:"-2.2px",
    left:0,
    "@media screen and (min-width:980px)":{
      gridRow:"9 / span 1"
    },
    "@media screen and (max-width:980px)":{
      gridRow:"9 / span 1"
    },
  }
});
