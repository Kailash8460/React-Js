import React from 'react'

const TitleText = (props) => {
    return (
        <div className="px-2 py-1 font-bold" >
            <p className='text-4xl'>{props.title}</p>
        </div>
    )
}

export default TitleText
