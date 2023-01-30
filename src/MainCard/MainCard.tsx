import React from 'react';
import { styles } from './MainCard.css';
import {Image} from "@fluentui/react";

export interface MainCardProps{
    imageTitle?:string;
    artistName?:string;
    image?:string;
}

export const MainCard = (props:MainCardProps) => {
    const {imageTitle,artistName,image} = props;
    return (
    <div className={styles.mainCardContainer}>
        <Image className={styles.image} src={ image} />
        <h2 className={styles.title}>{imageTitle}</h2>
        <div className={styles.artist}>{artistName}</div>
    </div>
    )
}

export default MainCard;