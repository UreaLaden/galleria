import React from "react";
import { styles } from "./App.css";
import { PortraitContext, PortraitContextProps } from "./store/portraitContext";
import MainGrid from "./Grid/MainGrid";
import NavBar from "./NavBar/NavBar";

function App() {
  const context = React.useContext<PortraitContextProps>(PortraitContext);

  return (
    <div className={styles.appContainer}>
      <NavBar/>
      <MainGrid />
    </div>
  );
}

export default App;
