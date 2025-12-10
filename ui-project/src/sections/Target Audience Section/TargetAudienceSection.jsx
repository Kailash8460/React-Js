import React from 'react'
import CardHeader from '../../components/Card Heading/CardHeader'
import enter from '../../assets/enter.png'
import TargetAudienceTitle from '../../components/Card Titles/TargetAudienceTitle'

const TargetAudienceSection = () => {
    return (
        <div className='bg-white py-4 px-6 rounded-sm shadow-2xl' >
            <CardHeader cardTitle="TARGET AUDIENCE" backgroundColor="#000000" textColor="#FFFFFF" icon={enter} text="DIGITAL BANKING PLATFORM" />
            <div>
                <div className='w-1'>
                    <TargetAudienceTitle />
                </div>
            </div>
        </div>
    )
}

export default TargetAudienceSection
