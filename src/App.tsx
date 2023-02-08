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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";

registerIcons(SVGIcons);

function App() {
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  React.useEffect(() => {
    const portraits: Portrait[] | undefined = getPortraits();
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainGrid />} />
              <Route
                path="details"
                element={
                  <DetailsPage
                    portraitImage={context.portrait.images.heroLarg}
                    artistImage={context.portrait.artist.image}
                    content={context.portrait.description}
                    year={context.portrait.year}
                    title={context.portrait.name}
                    artistName={context.portrait.artist.name}
                    source={context.portrait.source}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  return <div>Broke Something on the app component</div>;
}

export default App;
