import React from "react";
import { styles } from "./App.css";
import { Portrait, getPortraits } from "./utils/helpers";
import { PortraitContext, PortraitContextProps } from "./store/portraitContext";
import MainCard from "./MainCard/MainCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function App() {
  const context = React.useContext<PortraitContextProps>(PortraitContext);
  React.useEffect(() => {
    const portraits: Portrait[] | undefined = getPortraits();
    if (portraits && context) {
      portraits.forEach((element) => context.addPortrait(element));
      context.setCurrentPortrait(portraits[0]);
    }
  }, []);
  
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <div className={styles.appContainer}>
        <Masonry>
          {context.portraits.map((val, idx) => {
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
      </div>
    </ResponsiveMasonry>
  );
}

export default App;
