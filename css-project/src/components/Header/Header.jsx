import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        // Usage of module css file how to import and apply.
        <div className={styles.header}>
            This is Header.
        </div>
    )
}

export default Header
