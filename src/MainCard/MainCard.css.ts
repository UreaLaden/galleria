import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    mainCardContainer:{
        display:'grid',
        gridTemplate:"repeat(7,1fr) / repeat(7,1fr)",
        width:'100%',
        height:"100%"
    },
    image:{
        gridColumn:"1 / -1",
        gridRow:"1 / -1"
    },
    title:{
        gridRow:"5 / 7",
        gridColumn:"2 / 6",
        "z-index":2,
        color:Colors.WHITE,
        ...Fonts.Heading2,
        alignSelf:'end',
        margin:'0'
    },
    artist:{
        gridRow:"7 / 8",
        gridColumn:"2 / 6",
        "z-index":2,
        color:Colors.WHITE,
        ...Fonts.Subhead2   
    }
})