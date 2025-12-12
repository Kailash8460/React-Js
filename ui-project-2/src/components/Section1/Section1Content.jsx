import React from 'react'
import LeftContent from './Left Contnet/LeftContent'
import RightContent from './Right Content/RightContent'

const Section1Content = (props) => {
    return (
        <div className='flex gap-10 h-[90vh] pb-16 pt-6 px-18'>
            <LeftContent />
            <RightContent targetUsers={props.targetUsers} />
        </div>
    )
}

export default Section1Content
