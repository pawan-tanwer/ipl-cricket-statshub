import React, { useEffect, useState } from 'react'
import IplList from './IplList'
import axios from "axios"

const Bottom = () => {
  const [final, setFinal] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/ipl/final`);
      setFinal(response.data.finals);
    }
    fetchData()
  }, [])

  return (
    <div className='w-full h-auto border border-white/20 rounded-2xl text-white overflow-hidden'>

      {/* ── TABLE HEADER (desktop only) ── */}
      <div className='hidden md:grid w-full grid-cols-7 font-bold px-2 py-3 bg-white/10 border-b-2 border-amber-300/40 text-sm'>
        <h3 className='text-amber-300'>Year</h3>
        <h3>Team 1</h3>
        <h3>Team 2</h3>
        <h3>Score</h3>
        <h3>Winner</h3>
        <h3>Result</h3>
        <h3>Venue</h3>
      </div>

      {/* ── MOBILE HEADER ── */}
      <div className='md:hidden px-4 py-3 bg-white/10 border-b border-amber-300/40'>
        <h3 className='text-amber-300 font-bold text-sm tracking-wide'>All IPL Finals</h3>
      </div>

      {/* ── DATA ROWS ── */}
      <div className='p-2 md:p-0'>
        {
          final && Array.isArray(final) && final.length > 0 ? (
            <div className='flex flex-col gap-2 md:gap-0'>
              {final.map((finals, index) => (
                <IplList key={index} final={finals} />
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center py-16 text-gray-400'>
              <div className='text-center'>
                <div className='text-3xl mb-2'>🏏</div>
                <div className='text-sm'>Loading finals data...</div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Bottom

