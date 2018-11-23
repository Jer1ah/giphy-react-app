import React, { Component } from 'react';
import styles from './GifList.css'

import GifItem from '../GifItem/GifItem'


class GiftList extends Component {
    
    render() { 
        
    const gifyList = this.props.gifList.map((item) => <GifItem source={item.images.downsized.url}/>);    
        
    return (
        <ul className={styles.list}>
            {gifyList}
        </ul>
    );
  }
}

export default GiftList