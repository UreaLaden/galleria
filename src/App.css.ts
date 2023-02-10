import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    appContainer:{
        position:"relative",
        fontFamily:"Libre, Baskerville",
        display:'grid',
        "@media screen and (min-width:980px)":{
            height:'100%',
            gridTemplate:".25fr .5fr .25fr / 1fr",
            margin:"0 2vw"
        },
        "@media screen and (max-width:980px)":{
            height:"100%",
            gridTemplate:"repeat(10,1fr) / repeat(10,fr)",
            margin:"0"
        },
        "@media screen and (max-width:750px)":{
            margin:"0 2vw"
        }
    },
    mainGrid:{}
})