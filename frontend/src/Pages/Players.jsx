import React from 'react'
import Top from '../compnent/Players/Top'
import Filter from '../compnent/Players/Filter'
import Bottom from '../compnent/Players/Bottom'

const Players = () => {
  return (
    <div className="min-h-screen w-full bg-[#041B4A] px-3 sm:px-6 lg:px-9 py-6">
      <Top/>
      <Filter/>
      <Bottom/>
    </div>
  )
}

export default Players
