import * as React from "react";
import { Portrait } from "../utils/helpers";

const defaultPortrait: Portrait | undefined = undefined;

export interface PortraitContextProps {
  portrait: Portrait | undefined;
  portraits: Portrait[];
  nextPortrait: Portrait | undefined;
  previousPortrait: Portrait | undefined;
  addPortrait: (portrait: Portrait) => void;
  setCurrentPortrait: (portrait: Portrait) => void;
  setNextPortrait: () => void;
  setPreviousPortrait: () => void;
  getPortraitIndex: (portrait: Portrait | undefined) => number;
}

interface PortraitContextProviderProps {
  children?: React.ReactNode;
}

export const PortraitContext = React.createContext<PortraitContextProps>({
  portrait: undefined,
  portraits: [],
  nextPortrait: undefined,
  previousPortrait: undefined,
  addPortrait: (portrait: Portrait) => {},
  setCurrentPortrait: (portrait: Portrait) => {},
  setNextPortrait: () => {},
  setPreviousPortrait: () => {},
  getPortraitIndex: (portrait: Portrait | undefined) => -1,
});

export const PortraitContextProvider: React.FC<PortraitContextProviderProps> = (
  props: PortraitContextProviderProps
) => {
  const [allPortraits, setAllPortraits] = React.useState<Portrait[]>([]);
  const [currentPortrait, setCurrentPortrait] = React.useState<
    Portrait | undefined
  >(defaultPortrait);
  const [nextPortrait, setNextPortrait] = React.useState<Portrait | undefined>(
    defaultPortrait
  );
  const [previousPortrait, setPreviousPortrait] = React.useState<
    Portrait | undefined
  >(defaultPortrait);

  const addPortraitHandler = (data: Portrait) => {
    setAllPortraits((portraits) => portraits.concat(data));
  };

  const setCurrentPortraitHandler = (portrait: Portrait) => {
    setCurrentPortrait(portrait);

    setPreviousPortrait(() => {
      const currentPortraitIdx = getPortraitIndexHandler(currentPortrait);
      const prev = allPortraits[currentPortraitIdx - 1];
      if (currentPortraitIdx <= 0) return undefined;
      return prev;
    });

    setNextPortrait(() => {
      const currentPortraitIdx = getPortraitIndexHandler(currentPortrait);
      const next = allPortraits[currentPortraitIdx + 1];
      if (currentPortraitIdx >= allPortraits.length - 1) return undefined;
      return next;
    });
  };

  const setNextPortraitHandler = () => {
    const currentPortraitIdx = getPortraitIndexHandler(currentPortrait);
    const next =
      currentPortraitIdx >= 0 && currentPortraitIdx < allPortraits.length - 1
        ? allPortraits[currentPortraitIdx + 1]
        : undefined;
    if (next) {
      setCurrentPortraitHandler(next);
    }
  };

  const setPreviousPortraitHandler = () => {
    const currentPortraitIdx = getPortraitIndexHandler(currentPortrait);
    const prev =
      currentPortraitIdx > 0 && currentPortraitIdx < allPortraits.length
        ? allPortraits[currentPortraitIdx - 1]
        : undefined;
    if (prev) {
      setCurrentPortraitHandler(prev);
    }
  };

  const getPortraitIndexHandler = (portrait: Portrait | undefined):number => {
    if (portrait === undefined) return -1;
    return allPortraits.findIndex((p) => p.id === portrait.id);
  };

  const context = {
    portrait: currentPortrait,
    portraits: allPortraits,
    nextPortrait: nextPortrait,
    previousPortrait: previousPortrait,
    addPortrait: addPortraitHandler,
    setCurrentPortrait: setCurrentPortraitHandler,
    setNextPortrait: setNextPortraitHandler,
    setPreviousPortrait: setPreviousPortraitHandler,
    getPortraitIndex: getPortraitIndexHandler,
  };

  return (
    <PortraitContext.Provider value={context}>
      {props.children}
    </PortraitContext.Provider>
  );
};
