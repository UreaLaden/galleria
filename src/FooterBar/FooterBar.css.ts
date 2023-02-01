import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
  footerContainer: {
    gridRow: "2 / 3 ",
    gridColumn:"1 / span 2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1%",
    borderTop: `3px solid ${Colors.GREY2}`,
    position:'relative'
  },
  footerDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    justifyContent: "space-around",
    height: "50%",
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
  },
  progressBar:{
    position:'absolute',
    width:'10%',
    borderTop:`3px solid ${Colors.BLACK}`,
    top:"-2.8px",
    left:0
  }
});
