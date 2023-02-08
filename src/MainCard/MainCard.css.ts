import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
  mainCardParent: {
    display: "block",
  },
  mainCardContainer: {
    display: "grid",
    gridTemplate: "repeat(6,1fr) .75fr / .5fr repeat(6,1fr)",
    width: "100%",
    height: "100%",
    h2: {
      transition: "transform 150ms ease-in,opacity 300ms ease-in-out",
    },
    p:{
        transition: "transform 150ms ease-in,opacity 300ms ease-in-out",
    },
    ":hover": {
      cursor: "pointer",
      h2: {
        transform: "translateY(0)",
        opacity: "1",
      },
      p: {
        transform: "translateY(0)",
        opacity: "1",
      },
    },
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    gridRow: "4 / 7",
    gridColumn: "2 / 6",
    "z-index": 20,
    color: Colors.WHITE,
    ...Fonts.Heading2,
    alignSelf: "end",
    margin: "0",
    opacity: "0",
    transform: "translateY(50%)",
    position:'absolute',
    bottom:50,
    left:20
  },
  artist: {
    gridRow: "7 / 8",
    gridColumn: "2 / 6",
    "z-index": 20,
    color: Colors.WHITE,
    ...Fonts.Subhead2,
    opacity:"0",
    transform:'translateY(50%)',
    position:'absolute',
    bottom:20,
    left:20
  },
  overlay: {
    backgroundSize: "cover",
    gridRow: "1 / -1",
    gridColumn: "1 / -2",
    position:'relative'
  },
});
