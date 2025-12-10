import React from 'react'

const TitleBgText = (props) => {
    return (
        <div
            className="px-2 pb-1.5 rounded-full font-bold"
            style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
        >
            <p className='text-4xl'>{props.headerTitle}</p>
        </div>
    )
}

export default TitleBgText
