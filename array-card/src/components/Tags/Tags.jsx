import React from 'react'
import './Tags.css'

const Tags = (props) => {
    return (
        <div className="tags" style={{ backgroundColor: props.tagBgColor }}>
            <h4>{props.tagName}</h4>
        </div>
    )
}

export default Tags