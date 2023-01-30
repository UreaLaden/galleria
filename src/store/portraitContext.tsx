import * as React from "react";
import { Portrait } from "../utils/helpers";

export const PortraitContext = React.createContext({
  portrait: null,
  portraits: [],
  currentPage: 0,
  lastPage: 0,
  addPortrait: (portrait:Portrait) => {},
  goToNextPage: () => {},
  goToLastPage: () => {},
  setCurrentPortrait:() => {},
});

export const PortraitContextProvider = (props: any) => {
  const [allPortraits, setAllPortraits] = React.useState<Portrait[]>([]);
  const [currentPortrait, setCurrentPortrait] = React.useState<Portrait>();

  const addPortraitHandler = (data: Portrait) => {
    setAllPortraits((portrait) => portrait.concat(data));
  };

  const setCurrentPortraitHandler = (id:string) =>{
    setCurrentPortrait(portrait =>{
        return allPortraits.find(value => value.id === id);
    })
  }

  const nextPageHandler = () => {
    console.log("Not yet implemented");
  };
  const previousPageHandler = () => {
    console.log("Not yet implemented");
  };

  const context = {
    portrait: currentPortrait,
    portraits: allPortraits,
    currentPage: 0,
    lastPage: 0,
    addPortrait: addPortraitHandler,
    goToNextPage: nextPageHandler,
    goToLastPage: previousPageHandler,
    setCurrentPortrait:setCurrentPortraitHandler,
  };
  return (
    <PortraitContextProvider value={context}>
      {props.children}
    </PortraitContextProvider>
  );
};
