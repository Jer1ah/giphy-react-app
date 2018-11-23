import React from 'react';
import styles from './SearchBar.css';


const searchBar = (props) => {
    return (
        <div className={styles.searchBar}>
            <input type="text"/>
            <button onClick={() => props.query(document.getElementsByTagName("INPUT")[0].value)}>Search Gifs!</button>
        </div>
    );
}

export default searchBar;