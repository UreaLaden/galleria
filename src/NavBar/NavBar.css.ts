import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    navbarContainer:{
        gridRow:"1 / 2",
        gridColumn:"1 / -1",
        display:'grid',
        "@media screen and (min-width:980px)":{
            gridTemplate:"repeat(3,.5fr) /30px repeat(7,1fr) 30px",
            alignItems:'center',
        },
        "@media screen and (max-width:980px)":{
            display:'grid',
            gridTemplate:"repeat(2,auto) /30px repeat(10,1fr) 30px",
            alignItems:'center',
        }
        
    },
    header:{
        ...Fonts.Heading1,
        "@media screen and (min-width:980px)":{
            gridColumn:"2 / span 1",
            gridRow:"1 / span 2"
        },
        "@media screen and (max-width:980px)":{
            gridColumn:"2 / span 1",
            gridRow:"1 / 3",      
            margin:'0',
            alignSelf:"center"     
        }
    },
    slideshowButton:{
        ...Fonts.Link1,
        color:Colors.GREY3,
        "@media screen and (min-width:980px)":{
            gridColumn:"8 / 9",
            gridRow:"1 / span 2"
        },
        "@media screen and (max-width:980px)":{
            gridColumn:"9 / span 3",
            gridRow:"1 / 3",
            alignSelf:"center",
        },
        ":hover":{
            color:Colors.GREY1
        }
    },
    divider:{
        borderTop:`2px solid ${Colors.GREY2}`,
        height:"30px",
        "@media screen and (min-width:980px)":{
            gridColumn:"1 / -1",
            gridRow:"2 / 5",            
        },
        "@media screen and (max-width:980px)":{
            gridColumn:"1 / -1",
            gridRow:"2 / 5",            
        }
    }
})