import React from 'react'
import CardHeader from '../../components/Card Heading/CardHeader'
import enter from '../../assets/enter.png'
import MarketOpportunityTitle from '../../components/Card Titles/MarketOpportunityTitle'

const MarketOpportunitySection = () => {
    return (
        <div className='bg-white py-4 px-6 rounded-sm shadow-2xl' >
            <CardHeader cardTitle="MARKET OPPORTUNITY" backgroundColor="#000000" textColor="#FFFFFF" icon={enter} text="DIGITAL BANKING PLATFORM" />
            <div>
                <div className='w-80'>
                    <MarketOpportunityTitle />
                </div>
            </div>
        </div>
    )
}

export default MarketOpportunitySection
