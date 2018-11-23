import React from 'react';
import styles from './Header.css'

const Header = (props) => {
    return (
        <h1 className={styles.header}>{props.title}</h1>
    );
}

export default Header