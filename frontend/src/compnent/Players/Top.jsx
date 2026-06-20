import React from 'react'

const Top = () => {
  return (
    <div
      className="w-full h-auto flex flex-col sm:flex-row gap-4 md:justify-between bg-cover bg-center bg-no-repeat relative rounded-2xl overflow-hidden"
      style={{ backgroundImage: "url('/iplStadium.png')" }}
    >
      {/* Dark overlay for readability on mobile */}
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent pointer-events-none" />

      {/* Left section */}
      <div className="relative flex flex-col gap-3 justify-center px-4 py-6 sm:py-8 sm:px-6 w-full sm:w-[55%]">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight">
            IPL LEGENDS
          </h1>
        </div>
        <div className="text-[#CBD5E1] text-sm sm:text-base">
          <p>Relive the journey of iconic players who</p>
          <p>made IPL finals unforgettables</p>
        </div>
        {/* Search bar */}
        
      </div>

      {/* Right section — hide image on very small screens */}
      <div className="relative hidden sm:flex w-full sm:w-[45%] justify-center items-end">
        <img className="h-48 sm:h-64 lg:h-96 object-contain" src="/legend.png" alt="" />
      </div>
    </div>
  )
}

export default Top
