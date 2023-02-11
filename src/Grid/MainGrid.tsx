import * as React from "react";
import MainCard from "../MainCard/MainCard";
import { styles } from "./MainGrid.css";
import {
  PortraitContext,
  PortraitContextProps,
} from "../store/portraitContext";
import { Portrait, getPortraits } from "../utils/helpers";
import Masonry from "react-masonry-css";

export const MainGrid = (props: any) => {
  const context = React.useContext<PortraitContextProps>(PortraitContext);
  const [allPortraits,setPortraits] = React.useState<Portrait[]>([])

  React.useEffect(()=>{},[]);

  React.useEffect(() => {
    const portraits: Portrait[] | undefined = getPortraits();
    if (portraits && context) {
      if (context.portraits.length < portraits.length) {
        portraits.forEach((element) => context.addPortrait(element));
      }
      context.setCurrentPortrait(portraits[0]);
      setPortraits(context.portraits);
    }
  }, [context.portraits]);

  return (
    <div key={props.pageId} className={styles.mainGrid}>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allPortraits.map((val) => {
          return (
            <MainCard
              key={val.id}
              imageTitle={val.name}
              artistName={val.artist.name}
              image={val.images.thumbnail}
              portrait={val}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default MainGrid;
