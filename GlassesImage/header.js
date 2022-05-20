import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h2>TRY GLASSES APP ONLINE</h2>
            </div>
        );
    }
}

export default Header;