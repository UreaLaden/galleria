import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    footerContainer:{
        gridRow:"3 / 4 ",
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 1%"
    },
    detailsContainer:{},
    title:{},
    artist:{},
    previousIcon:{},
    nextIcon:{},
    navigationContainer:{}
})