import * as React from "react";
import { styles } from "./App.css";
import { PortraitContext, PortraitContextProps } from "./store/portraitContext";
import MainGrid from "./Grid/MainGrid";
import NavBar from "./NavBar/NavBar";
import DetailsPage from "./DetailsPage/DetailsPage";
import FooterBar from "./FooterBar/FooterBar";
import { Portrait, getPortraits } from "./utils/helpers";
import { registerIcons } from "@fluentui/react";
import { SVGIcons } from "./utils/constants";

registerIcons(SVGIcons);

function App() {
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  React.useEffect(() => {
    const portraits:Portrait[] | undefined = getPortraits();
    if (portraits && context) {
      if (context.portraits.length < portraits.length) {
        portraits.forEach((element) => context.addPortrait(element));
      }
      if (
        context.portraits &&
        context.portraits.length === portraits.length &&
        context.portrait === undefined
      ) {
        context.setCurrentPortrait(context.portraits[0]);
      }
    }
  }, [context.portraits]);

  if (context.portrait) {
    return (
      <div className={styles.appContainer}>
        <NavBar />
        {/* <MainGrid /> */}
        <DetailsPage
          portraitImage={context.portrait.images.heroLarg}
          artistImage={context.portrait.artist.image}
          content={context.portrait.description}
          year={context.portrait.year}
          title={context.portrait.name}
          artistName={context.portrait.artist.name}
          source={context.portrait.source}
        />
      </div>
    );
  }
  return <div>Broke Something on the app component</div>;
}

export default App;
