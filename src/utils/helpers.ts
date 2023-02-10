import data from "./data.json";

const { v4: uuidv4 } = require("uuid");

export interface Portrait {
  id: string;
  index:number;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: PortraitImage;
}

export type Artist = {
  image: string;
  name: string;
};

export type PortraitImage = {
  thumbnail: string;
  heroSmall: string;
  heroLarg: string;
  gallery: string;
};

export const getPortraits = (): Portrait[] | undefined => {
  let portraits: Portrait[] = [];
  try {
    data.forEach((element,idx) => {
      const artist: Artist = {
        image: element.artist.image,
        name: element.artist.name,
      };
      const image: PortraitImage = {
        thumbnail: element.images.thumbnail,
        heroSmall: element.images.hero.small,
        heroLarg: element.images.hero.large,
        gallery: element.images.gallery,
      };
      let portrait: Portrait = {
        id: uuidv4(),
        index:idx,
        name: element.name,
        year: element.year,
        description: element.description,
        source: element.source,
        artist: artist,
        images: image,
      };
      portraits.push(portrait);
    });
    return portraits;
  } catch (error) {
    console.warn(error);
  }
};