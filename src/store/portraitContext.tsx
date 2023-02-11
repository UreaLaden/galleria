import * as React from "react";
import { Portrait } from "../utils/helpers";

const defaultPortrait: Portrait | undefined = undefined;

export interface PortraitContextProps {
  portrait: Portrait | undefined;
  portraits: Portrait[];
  nextPortrait: Portrait | undefined;
  previousPortrait: Portrait | undefined;
  slideshowActive:boolean;
  overlayActive:boolean;
  addPortrait: (portrait: Portrait) => void;
  setCurrentPortrait: (portrait: Portrait) => void;
  setNextPortrait: () => void;
  setPreviousPortrait: () => void;
  showOverlay:() => void;
  startSlideshow:() => void;
  stopSlideshow:() => void;
}

interface PortraitContextProviderProps {
  children?: React.ReactNode;
}

export const PortraitContext = React.createContext<PortraitContextProps>({
  portrait: undefined,
  portraits: [],
  nextPortrait: undefined,
  previousPortrait: undefined,
  slideshowActive:false,
  overlayActive:false,
  addPortrait: (portrait: Portrait) => {},
  setCurrentPortrait: (portrait: Portrait) => {},
  setNextPortrait: () => {},
  setPreviousPortrait: () => {},
  showOverlay:() =>{},
  startSlideshow:() => {},
  stopSlideshow:() => {}
});

export const PortraitContextProvider: React.FC<PortraitContextProviderProps> = (
  props: PortraitContextProviderProps
) => {
  const [allPortraits, setAllPortraits] = React.useState<Portrait[]>([]);
  const [currentPortrait, setCurrentPortrait] = React.useState<Portrait | undefined>(defaultPortrait);
  const [nextPortrait, setNextPortrait] = React.useState<Portrait | undefined>(defaultPortrait);
  const [previousPortrait, setPreviousPortrait] = React.useState<Portrait | undefined>(defaultPortrait);
  const [showOverlay,setShowOverlay] = React.useState<boolean>(false);
  const [isActiveSlideshow,setIsActiveSlideshow] = React.useState<boolean>(false);
  const [timeoutId,setTimeoutId] = React.useState<NodeJS.Timer>();

  const addPortraitHandler = (data: Portrait) => {
    setAllPortraits((portraits) => portraits.concat(data));
  };

  const setCurrentPortraitHandler = (portrait: Portrait) => {
    setCurrentPortrait(portrait);

    setPreviousPortrait(() => {
      if(portrait === undefined) return undefined;
      const prev = allPortraits[portrait.index - 1];
      if (portrait.index - 1 < 0) return undefined;
      return prev;
    });

    setNextPortrait(() => {
      if(portrait === undefined) return undefined;
      const next = allPortraits[portrait.index + 1];
      if (portrait.index >= allPortraits.length - 1) return undefined;
      return next;
    });
  };

  const setNextPortraitHandler = () => {
    if(currentPortrait === undefined) return undefined;
    const next =
    currentPortrait.index >= 0 && currentPortrait.index < allPortraits.length - 1
        ? allPortraits[currentPortrait.index + 1]
        : undefined;
    if (next) {
      setCurrentPortraitHandler(next);
    }
  };

  const setPreviousPortraitHandler = () => {
    if(currentPortrait === undefined) return undefined;
    const prev =
    currentPortrait.index > 0 && currentPortrait.index < allPortraits.length
        ? allPortraits[currentPortrait.index - 1]
        : undefined;
    if (prev) {
      setCurrentPortraitHandler(prev);
    }
  };

  const setShowOverlayHandler = () => {
    setShowOverlay(!showOverlay)
  }

  const setIsActiveSlideshowHandler = (interval = 3000) => {
    setIsActiveSlideshow(true);
    setCurrentPortraitHandler(allPortraits[0]);
    setShowOverlayHandler();
  }

  const stopSlideShowHandler = () => {
    setIsActiveSlideshow(false);
    setShowOverlayHandler();
  }

  const context = {
    portrait: currentPortrait,
    portraits: allPortraits,
    nextPortrait: nextPortrait,
    previousPortrait: previousPortrait,
    slideshowActive:isActiveSlideshow,
    overlayActive:showOverlay,
    addPortrait: addPortraitHandler,
    setCurrentPortrait: setCurrentPortraitHandler,
    setNextPortrait: setNextPortraitHandler,
    setPreviousPortrait: setPreviousPortraitHandler,
    showOverlay:setShowOverlayHandler,
    startSlideshow:setIsActiveSlideshowHandler,
    stopSlideshow:stopSlideShowHandler
  };

  return (
    <PortraitContext.Provider value={context}>
      {props.children}
    </PortraitContext.Provider>
  );
};
