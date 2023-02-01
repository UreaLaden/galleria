import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    appContainer:{
        fontFamily:"Libre, Baskerville",
        margin:"0 2rem",
        height:'100%',
        display:'grid',
        gridTemplate:"1fr 2fr 1fr / 1fr",
        "@media screen and (min-width:1440px)":{
            margin:"0 24rem"
        }
    },
    mainGrid:{}
})