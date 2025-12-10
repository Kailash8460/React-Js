import React from 'react'
import TitleText from '../Texts/TitleText'
import TitleBgText from '../Texts/TitleBgText'

const TargetAudienceTitle = () => {
    return (
        <div className='flex items-center gap-2 flex-wrap' >
            <TitleText title="Prospective" />
            <TitleBgText headerTitle="customer" backgroundColor="#F5F5F5" textColor="#000000" />
            <TitleText title="segmentation" />
        </div>
    )
}

export default TargetAudienceTitle
