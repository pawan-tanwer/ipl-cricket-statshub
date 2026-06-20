import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import BattingStats from '../compnent/BattingStats';
import BowlingStats from '../compnent/bowlingStats';


const PlayerFullProfile = () => {

  const {name,saveName} = useContext(StoreContext);
  const [localData, setLocalData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  saveName(name);

  const playerName = name || localStorage.getItem("playerName")

  const getImage =(playerName)=>{

    const encodedName = encodeURIComponent(playerName);

     return `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${encodedName}.png`

  }

  useEffect( ()=>{
    
    const fatchData = async()=>{
      if (!playerName) return
    const encodedName = encodeURIComponent(playerName)
    const response = await axios.get(`http://localhost:8000/ipl/battingCareer/${encodedName}`);
    setLocalData(response.data);
    }
    fatchData()
  },[playerName])

  return (
    <div className='bg-[#0B1C2C] h-full w-full text-amber-50'>
      <div className='w-full flex justify-center pt-6'>
        <div className='w-[90%] h-96 border border-amber-600 rounded-2xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
          {/**first grid */}
          <div><img className='h-[366px] w-96'  src={getImage(playerName)} alt="" /></div>
          {/**second grid */}
          <div className='py-4'>
            <div className='flex gap-3 items-center'>
              <h1 className='text-3xl font-medium '>{name} </h1>
              <img className='h-6 ' src="/blueTick.png" alt="" />
            </div>
            <p className='text-amber-500'>{localData?.role?? " N/A"}</p>
            <div className='flex justify-between py-4 pr-3'>
              <div className='text-center w-28 h-18'>
                <p className='text-gray-400 font-mono'>IPL Debut</p>
                <p>{localData?.ipl_debut}</p>
              </div>
              <div className=' text-center  w-28 h-18'>
                <p className='text-gray-400 font-mono'>Nationality</p>
                <p>{localData?.nationality}</p>
              </div>
              <div className='text-center w-44 h-18'>
                <p className='text-gray-400 font-mono'>Team</p>
                <p>{localData?.team}</p>
              </div>
            </div>
            <p className='overflow-y-auto h-36 scrollbar-hide text-gray-400 '>{localData?.bio}</p>
          </div>
          {/** third grid */}
          <div className='flex items-center justify-center'>
            <div className='h-80 w-96 rounded-2xl px-3 py-3 bg-[#0A1428] '>
              <h2 className='text-amber-500 font-bold'>IPL {currentSlide === 0 ? "Batting" : "Bowling"} Summary</h2>
              <div className='flex flex-col gap-3 py-3 '>
                
                <div className='flex gap-2'>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.matches}</p><p className='text-gray-300'>Matches</p></div>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.runs}</p><p className='text-gray-300'>Runs</p></div>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.strike_rate}</p><p className='text-gray-300'>Strike Rate</p></div>
                </div>
                <div className='flex gap-2'>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.average}</p><p className='text-gray-300'>Average</p></div>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.centuries}</p><p className='text-gray-300'>Centuries</p></div>
                  <div className=' h-28 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-800'><p className='text-2xl'>{localData?.battingCareerStats?.half_centuries}</p><p className='text-gray-300'>Fifties</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BattingStats localData={localData}/>
      <BowlingStats localData={localData}/>
    </div>
  )
}

export default PlayerFullProfile
