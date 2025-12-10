import React from 'react'
import Navbar from './components/Navbar/Navbar'
import TargetAudienceSection from './sections/Target Audience Section/TargetAudienceSection'
import MarketTrendsSection from './sections/Market Trends Section/MarketTrendsSection'
import MarketOpportunitySection from './sections/Market Opportunity Section/MarketOpportunitySection'

const App = () => {
  return (
    <div className='px-50 py-16 space-y-12 bg-linear-to-br from-white from-0% to-[#abbff5] min-h-screen' >
      < Navbar />
      <TargetAudienceSection />
      <MarketTrendsSection />
      <MarketOpportunitySection />
    </div>
  )
}

export default App
