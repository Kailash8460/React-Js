import React from 'react'
import TitleText from '../Texts/TitleText'
import TitleBgText from '../Texts/TitleBgText'

const MarketOpportunityTitle = () => {
    return (
        <div className='flex items-center gap-2 flex-wrap' >
            <TitleText title="The" />
            <TitleBgText headerTitle="opportunity" backgroundColor="#C6F45D" textColor="#000000" />
        </div>
    )
}

export default MarketOpportunityTitle
