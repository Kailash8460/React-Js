import React from 'react'
import styles from './Tags.module.css'

const Tags = (props) => {
    return (
        <div className={styles.tags} style={{ backgroundColor: props.tagBgColor }}>
            <h4>{props.tagName}</h4>
        </div>
    )
}

export default Tags