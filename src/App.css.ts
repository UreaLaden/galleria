import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    appContainer:{
        position:"relative",
        fontFamily:"Libre, Baskerville",
        display:'grid',
        "@media screen and (min-width:1440px)":{
            height:'100%',
            gridTemplate:"1fr 2fr 1fr / 1fr",
            margin:"0 10vw"
        },
        "@media screen and (max-width:1440px)":{
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