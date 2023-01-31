import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    detailsContainer:{
        display:'grid',
        gridTemplate:".25fr 4fr .25fr / 2fr 1fr"
    },
    displayContainer:{
        gridRow:"2 / 3",
        gridColumn:"1 / 2",
        border:"3px solid red",
        display:'grid',
        gridTemplate:"repeat(14,1fr) / repeat(14,1fr)"
    },
    mainImage:{
        gridRow:"1 / 13",
        gridColumn:"1 / 9",
    },
    hero:{
        width:"100%"
    },
    description:{
        gridRow:"1 / 5",
        gridColumn:"9 / 13",
        display:"flex",
        flexDirection:'column',
        rowGap:"1rem",
        backgroundColor:Colors.WHITE,
        "z-index":10
    },
    placeholder:{
        backgroundColor:Colors.WHITE,
        gridRow:"1 / 6",
        gridColumn:"8 / 12"
    },
    title:{
        ...Fonts.Heading1,
        fontWeight:'bold',
    },
    artistName:{
        ...Fonts.Subhead1
    },
    artistImage:{
        gridRow:'11 / -2',
        gridColumn:"9 / 12",
        display:'grid',
        gridTemplate:"repeat(4,25%) / 10% repeat(3,25%) 15%",
    },
    artist:{
        gridRow:"1 / -1",
        gridColumn:"2 / -1",
        height:"100%"
    },
    imageView:{
        gridRow:"11 / 13",
        gridColumn:"1 / 5",
        display:'grid',
        gridTemplate:"repeat(3,33.33%) / repeat(5,20%)",
        marginLeft:"1.5vw"
    },
    overlayButton:{
        gridRow:"2 / 3",
        backgroundColor:"rgba(0,0,0,0.8)",
        color:Colors.WHITE,
        gridColumn:"1 / -2",
        display:'grid',
        gridTemplate:"1fr / 1fr 3fr",
        alignItems:'center',
        border:"none",
        padding:"0"
    },
    overlayIcon:{
        transform:'scale(1)'
    },
    overlayText:{
        ...Fonts.Subhead2,
        fontFamily:"Libre Baskerville",
        letterSpacing:".2rem",
        justifySelf:'start'
    },
    contentContainer:{
        gridRow:"2 / 3",
        gridColumn:"2 / 3",
        display:'grid',
        gridTemplate:"repeat(7,1fr) / repeat(7,1fr)",
    },
    year:{
        gridRow:"1 / 3",
        gridColumn:"1 / -1",
        ...Fonts.Display,
        color:Colors.GREY2,
        fontFamily:"Libre Baskerville",
        alignSelf:'baseline',
        fontWeight:'bold'
    },
    content:{
        gridRow:"2 / 7",
        gridColumn:"1/6",
        ...Fonts.Subhead1,
        marginTop:"-10px",
    },
    source:{
        gridRow:"6/7",
        gridColumn:"1 / 3",
        alignSelf:'start',
        textDecoration:'underline',
        ...Fonts.Link1,
        fontWeight:"bold",
        color:Colors.GREY3
    }
})