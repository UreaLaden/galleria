import * as React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MainCard from "../MainCard/MainCard";
import { styles } from "./MainGrid.css";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";
import { Portrait, getPortraits } from "../utils/helpers";

export const MainGrid = (props: any) => {
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  React.useEffect(() => {
    const portraits: Portrait[] | undefined = getPortraits();
    if (portraits && context) {
      if (context.portraits.length < portraits.length) {
        portraits.forEach((element) => context.addPortrait(element));
      }
      context.setCurrentPortrait(portraits[0]);
    }
  },[]);

  return (
    <div className={styles.mainGrid}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter={"30px"} columnsCount={4}>
          {context.portraits.map((val) => {
            return (
              <MainCard
                key={val.id}
                imageTitle={val.name}
                artistName={val.artist.name}
                image={val.images.thumbnail}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MainGrid;
