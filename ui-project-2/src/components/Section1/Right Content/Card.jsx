import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl bg-black'>
            <img className='h-full w-full object-cover opacity-40' src={props.img} alt="" />
            <CardContent id={props.id} color={props.color} intro={props.intro} tag={props.tag} />
        </div>
    )
}

export default Card
