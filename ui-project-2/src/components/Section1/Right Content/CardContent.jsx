import React from 'react'
import { ArrowRight } from 'lucide-react'

const CardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl text-white mb-14 leading-relaxed'>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button style={{ backgroundColor: props.color }} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <ArrowRight style={{ backgroundColor: props.color }} className='p-2 h-10 w-10 rounded-full' size={4} color="#ffffff" strokeWidth={0.2} absoluteStrokeWidth />
                </div>
            </div>
        </div>
    )
}

export default CardContent
