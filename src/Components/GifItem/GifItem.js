import React from 'react';
import styles from './GifItem.css';


const GiftItem = (props) => {
    return (
        <li className={styles.item}>
            <img src={props.source} alt="gif"/>
        </li>
    );
}

export default GiftItem