import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    appContainer:{
        fontFamily:"Libre, Baskerville",
        margin:"0 2rem",
        height:'100%',
        display:'grid',
        gridTemplate:".5fr 4fr .5fr / 1fr"
    },
    mainGrid:{}
})