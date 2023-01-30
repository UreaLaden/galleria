import React from "react";
import { styles } from "./App.css";
import MainCard from "./MainCard/MainCard";
import { Portrait, getPortraits } from "./utils/helpers";
import { PortraitContext } from "./store/portraitContext";

function App() {
  // const context = React.useContext(PortraitContext);
  // React.useEffect(() => {
  //   const portraits:Portrait[] | undefined = getPortraits();
  //   console.log(getPortraits());
  //   // portraits?.forEach((element) => context.addPortrait(element));
  // }, []);

  return (
    <h1 className={styles.appContainer}>
      {/* {context.portraits.map((val, idx) => {
        console.log(val);
        return (
          <MainCard key={val} imageTitle={"The Night Café"} artistName="" image="" />
        );
      })} */}
      Test
    </h1>
  );
}

export default App;
