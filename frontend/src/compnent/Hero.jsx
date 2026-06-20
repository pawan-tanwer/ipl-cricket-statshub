import React from 'react'
import SeasonLeaderSection from './SeasonLeaderSection'
import IPLStatsSection from './IPLStatsSection'

const Hero = () => {
  return (
    // h-screen → min-h-screen taaki mobile pe content clip na ho
    <div className='relative w-full min-h-screen overflow-hidden'>
      <img className='fixed inset-0 w-full h-full object-cover' src="/copy_hero.png" alt="" />
      <div className='absolute inset-0 bg-black/55'></div>
      {/* Sab content ek normal flow div mein — no more absolute positioning */}
      <div className='relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 gap-3'>
        <h1 className='text-2xl sm:text-6xl md:text-4xl font-bold text-white tracking-tighter'>
          IPL Player Stats
        </h1>
        <p className='font-light text-amber-50 text-sm sm:text-xl md:text-2xl'>
          Complete Stats • Every Player • 2008 - 2025
        </p>
      </div>
      <IPLStatsSection/>
      <SeasonLeaderSection />
    </div>
  )
}

export default Hero