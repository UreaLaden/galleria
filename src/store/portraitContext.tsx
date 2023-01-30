import * as React from "react";
import { Portrait } from "../utils/helpers";

const defaultPortrait:Portrait | undefined = undefined;

export interface PortraitContextProps{
    portrait:Portrait | undefined;
    portraits:Portrait[];
    addPortrait:(portrait:Portrait) => void;
    setCurrentPortrait:(portrait:Portrait) => void;
}

interface PortraitContextProviderProps{
    children?:React.ReactNode;
}

export const PortraitContext = React.createContext<PortraitContextProps>({
    portrait:undefined,
    portraits:[],
    addPortrait:(portrait:Portrait) => {},
    setCurrentPortrait:(portrait:Portrait)=>{}
});

export const PortraitContextProvider:React.FC<PortraitContextProviderProps> = (props: PortraitContextProviderProps) => {
  const [allPortraits, setAllPortraits] = React.useState<Portrait[]>([]);
  const [currentPortrait, setCurrentPortrait] = React.useState<Portrait | undefined>(defaultPortrait);

  const addPortraitHandler = (data: Portrait) => {
    setAllPortraits(portraits => portraits.concat(data));
  };

  const setCurrentPortraitHandler = (portrait:Portrait) =>{
    setCurrentPortrait(portrait);
  }

  const context = {
    portrait: currentPortrait,
    portraits: allPortraits,
    addPortrait: addPortraitHandler,
    setCurrentPortrait:setCurrentPortraitHandler,
  };

  return (
    <PortraitContext.Provider value={context}>
      {props.children}
    </PortraitContext.Provider>
  );
};