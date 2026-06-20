import React from 'react'
import Top from '../compnent/IPL-Final/Top'
import Bottom from '../compnent/IPL-Final/Bottom'

const IplFinal = () => {
  return (
    <div className="min-h-screen w-full bg-[#041B4A] px-3 sm:px-6 lg:px-9 py-6">
      <div>
        <Top />
      </div>
      <div className='mt-4 sm:mt-6'>
        <Bottom />
      </div>
    </div>
  )
}

export default IplFinal
