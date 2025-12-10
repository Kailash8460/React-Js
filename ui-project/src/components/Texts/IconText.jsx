import React from 'react'

const IconText = (props) => {
    return (
        <div className='flex items-center gap-1' >
            <img className='h-4 w-2' src={props.icon} alt="icon" />
            <p className='text-xs font-semibold'>{props.text}</p>
        </div>
    )
}

export default IconText
