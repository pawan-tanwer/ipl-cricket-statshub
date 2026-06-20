import React from 'react'

const Top = () => {
  return (
    <div className='w-full h-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 px-4 py-6 sm:py-4'>
      <div className='w-full sm:w-[60%] flex flex-col gap-2 items-center sm:items-start text-white text-center sm:text-left'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight'>
          🏆 IPL Finals History
        </h1>
        <p className='text-xs sm:text-sm lg:text-base text-gray-300 max-w-md'>
          Complete list of all Indian Premier League (IPL) Finals
        </p>
      </div>
      <div className='w-full sm:w-[40%] flex justify-center items-center'>
        <img
          className='size-28 sm:size-36 lg:size-52 object-contain drop-shadow-2xl'
          src="/ipl-trophy.png"
          alt="IPL Trophy"
        />
      </div>
    </div>
  )
}

export default Top

