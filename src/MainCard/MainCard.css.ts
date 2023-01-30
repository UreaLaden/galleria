import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    mainCardParent:{
        display:'block',
    },
    mainCardContainer:{
        display:'grid',
        gridTemplate:"repeat(6,1fr) .75fr / .5fr repeat(6,1fr)",
        width:'100%',
        height:"100%"
    },
    image:{
        gridColumn:"1 / -1",
        gridRow:"1 / -1",
        width:"100%",
        objectFit:"cover"
    },
    title:{
        gridRow:"5 / 7",
        gridColumn:"2 / 7",
        "z-index":20,
        color:Colors.WHITE,
        ...Fonts.Heading2,
        alignSelf:'end',
        margin:'0'
    },
    artist:{
        gridRow:"7 / 8",
        gridColumn:"2 / 6",
        "z-index":20,
        color:Colors.WHITE,
        ...Fonts.Subhead2   
    },
    overlay:{
        height:"100%",
        width:"100%",
        backgroundImage:"linear-gradient(to top,rgba(0,0,0,0.7),transparent)",
        gridRow:"1 / -1",
        gridColumn:"1 / -1",
        "z-index":10,
    }
})