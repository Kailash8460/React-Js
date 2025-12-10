import React from 'react'

const BgText = (props) => {
    return (
        <div
            className="px-2 py-1 rounded-full max-w-max"
            style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
        >
            <p className='text-xs'>{props.headerTitle}</p>
        </div>
    )
}

export default BgText
