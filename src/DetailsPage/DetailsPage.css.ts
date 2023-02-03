import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    detailsContainer:{
        display:'grid',
        width:"100%",
        "@media screen and (min-width:1440px)":{
            gridTemplate:"80vh 5vh / 2fr 1fr",
            marginTop:"4vh",
        },
        "@media screen and (max-width:1440px)":{
            gridTemplate:"58% 35% 7%/ 1fr"
        },
        "@media screen and (max-width:750px)":{
            gridTemplate:"50% 40% / 1fr"
        }
    },
    displayContainer:{
        display:'grid',
        "@media screen and (min-width:1440px)":{
            gridRow:"1 / span 1",
            gridColumn:"1 / 2",
            gridTemplate:"repeat(14,1fr) / repeat(14,1fr)",
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"1 / span 1",
            gridTemplate:"repeat(14,1fr) / 34px repeat(12,1fr) 40px",
            position:'relative'
        },
        "@media screen and (max-width:750px)":{
        }
    },
    mainImage:{
        position:'relative',
        alignSelf:'baseline',
        "@media screen and (min-width:1440px)":{
            gridRow:"1 / 13",
            gridColumn:"1 / 9",
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"1 / 13",
            gridColumn:"2 / 10"
        },
        "@media screen and (max-width:750px)":{
        }

    },
    hero:{
        width:"100%",
        height:"100%",
        "object-fit":"contain"
    },
    description:{
        "z-index":10,
        "@media screen and (min-width:1440px)":{
            display:"flex",
            flexDirection:'column',
            gridRow:"1 / 5",
            gridColumn:"9 / 13",
            rowGap:"1rem",
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"1 / 9",
            gridColumn:"6 / 14",
            display:"grid",
            gridTemplate:"auto .15fr 1fr / repeat(7,auto)"
        },
        "@media screen and (max-width:750px)":{}
    },
    placeholder:{
        backgroundColor:Colors.WHITE,
        "@media screen and (min-width:1440px)":{
            gridRow:"1 / 6",
            gridColumn:"8 / 12",
            transform:"translateY(-10px)"
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"2 / 3",
            gridColumn:"1 / 8",
        },
        "@media screen and (max-width:750px)":{}

    },
    title:{
        ...Fonts.Heading1,
        lineHeight:".85em",
        backgroundColor:Colors.WHITE,
        "@media screen and (min-width:1440px)":{
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"1 / 2",
            gridColumn:"1 / 2",
            display:'flex',
            flexDirection:"column",
            justifyItems:'center',
            rowGap:"20px",
            paddingLeft:"40px"
        },
        "@media screen and (max-width:750px)":{}
    },
    titleHeader:{
        "@media screen and (min-width:1440px)":{
        },
        "@media screen and (max-width:1440px)":{
            fontWeight:'600',
            fontSize:"3.5rem",
            maxWidth:'60%'
        },
        "@media screen and (max-width:750px)":{}
    },
    artistName:{
        ...Fonts.Subhead1,
        fontWeight:"normal",
        "@media screen and (min-width:1440px)":{
        },
        "@media screen and (max-width:1440px)":{
            // gridRow:"4 / 5",
            // gridColumn:"2 / 6",
            // marginTop:"10px"
        },
        "@media screen and (max-width:750px)":{}
    },
    artistImage:{
        display:'grid',
        "@media screen and (min-width:1440px)":{
            gridRow:'11 / -2',
            gridColumn:"9 / 12",
            gridTemplate:"repeat(4,25%) / 10% repeat(3,25%) 15%",
        },
        "@media screen and (max-width:1440px)":{
            gridColumn:"1 / -1",
            gridRow:"3 / -1",
            display:'grid',
            gridTemplate:"repeat(10,1fr) / repeat(18,1fr)"
        },
        "@media screen and (max-width:750px)":{}
    },
    artist:{
        gridRow:"1 / -1",
        gridColumn:"11 / -1",
        // height:"100%"
    },
    imageView:{
        position:'absolute',
        bottom:30,
        left:20,
        width:"38%",
        height:"50px",
    },
    overlayButton:{
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.8)",
        color:Colors.WHITE,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        border:"none",
        padding:"2%",
        transition:"box-shadow transform 600ms ease",
        ":hover":{
            boxShadow:"1px 1px 5px 5px rgba(255,255,255,0.8)",
            transform:"translateY(-5px)",
            cursor:"pointer"
        }
    },
    overlayIcon:{
    },
    overlayText:{
        ...Fonts.Subhead2,
        fontFamily:"Libre Baskerville",
        letterSpacing:".2rem",
        justifySelf:'start'
    },
    contentContainer:{
        display:'grid',
        position:'relative',
        "@media screen and (min-width:1440px)":{
            gridRow:"1 / span 1",
            gridColumn:"2 / 3",
            gridTemplate:"repeat(7,1fr) / repeat(7,1fr)",
        },
        "@media screen and (max-width:1440px)":{
            gridRow:"2 / span 1",
            gridColumns:"1 / span 1",
            "z-index":5,
            display:'grid',
            gridTemplate:"repeat(10,.1fr) /repeat(10,1fr)"
        },
        "@media screen and (max-width:750px)":{
        }
    },
    year:{
        gridRow:"1 / 4",
        gridColumn:"1 / -1",
        ...Fonts.Display,
        color:Colors.GREY2,
        fontFamily:"Libre Baskerville",
        alignSelf:'baseline',
        fontWeight:'bold',
        "@media screen and (max-width:1440px)":{
            position:'absolute',
            top:"25%",
            left:"9%",
            fontSize:"15vh"
        },
    },
    content:{
        gridRow:"2 / 7",
        gridColumn:"1/6",
        ...Fonts.Subhead1,
        marginTop:"-10px",
        "@media screen and (max-width:1440px)":{
            "z-index":"10",
            gridRow:"4 / -1",
            gridColumn:"3 / 9",
            lineHeight:"24px",
            fontSize:"1.78vw"
        },
    },
    source:{
        gridRow:"7 / 8",
        gridColumn:"1 / 4",
        alignSelf:'start',
        textDecoration:'underline',
        ...Fonts.Link1,
        fontWeight:"bold",
        color:Colors.GREY3,
        "@media screen and (max-width:1440px)":{
            gridRow:"9 / 10",
            gridColumn:"3 / -1",
            alignSelf:"center"
        },
    }
})