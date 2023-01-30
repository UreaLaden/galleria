import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../utils/constants";

export const styles = mergeStyleSets({
    navbarContainer:{
        display:'flex',
        justifyContent:"space-between",
        alignItems:'center',
        height:"8vh",
        borderBottom:`2px solid ${Colors.GREY1}`
    },
    header:{
        ...Fonts.Heading1
    },
    slideshowButton:{
        ...Fonts.Link1,
        color:Colors.GREY3,
    }
})