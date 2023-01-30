import React from 'react';
import { styles } from './MainCard.css';

export interface MainCardProps{
    imageTitle:string;
    artistName:string;
    image:string;
}

export const MainCard = (props:MainCardProps) => {
    return <div className={styles.mainCardContainer}>Image</div>
}

export default MainCard;