import React from 'react'
import Section1Navbar from './Section1Navbar'
import Section1Content from './Section1Content'

const Section1 = (props) => {
    return (
        <div className='h-screen w-full'>
            <Section1Navbar />
            <Section1Content targetUsers={props.targetUsers} />
        </div>
    )
}

export default Section1
