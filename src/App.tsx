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
  const [mockData, setMockdata] = React.useState<Portrait | undefined>(
    undefined
  );

  React.useEffect(() => {
    const data: Portrait[] | undefined = getPortraits();

    if (data) {
      setMockdata(data[0]);
    }
  }, []);

  if (mockData) {
    return (
      <div className={styles.appContainer}>
        <NavBar />
        {/* <MainGrid /> */}
        <DetailsPage
          portraitImage={mockData.images.heroLarg}
          artistImage={mockData.artist.image}
          content={mockData.description}
          year={mockData.year}
          title={mockData.name}
          artistName={mockData.artist.name}
          source={mockData.source}
        />
        <FooterBar />
      </div>
    );
  }
  return <div>Nothing to see here</div>;
}

export default App;
