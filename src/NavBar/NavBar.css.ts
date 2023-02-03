import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    navbarContainer:{
        gridRow:"1 / 2",
        gridColumn:"1 / -1",
        display:'grid',
        gridTemplate:"repeat(2,auto) /30px repeat(10,1fr) 30px",
        alignItems:'center',
        
    },
    header:{
        ...Fonts.Heading1,
        "@media screen and (max-width:1440px)":{
            gridColumn:"2 / span 1",
            gridRow:"1 / 3",      
            margin:'0',
            alignSelf:"center"     

        }
    },
    slideshowButton:{
        ...Fonts.Link1,
        color:Colors.GREY3,
        gridColumn:"9 / span 3",
        gridRow:"1 / 3",
        alignSelf:"center",
        ":hover":{
            color:Colors.GREY1
        }
    },
    divider:{
        // backgroundColor:"green",
        borderBottom:`2px solid ${Colors.GREY1}`,
        height:"30px",
        "@media screen and (max-width:1440px)":{
            gridColumn:"1 / -1",
            gridRow:"2 / 5",            
        }
    }
})