import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const TeamPlayersProfile = ({batter}) => {

  const {setName} = useContext(StoreContext)

  const getUrlImage =(name)=>{
    const encodedName = encodeURIComponent(name);
    return `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${encodedName}.png`
  }

  return (
    <Link to='/profile' className='w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 lg:w-64 lg:h-72 rounded-2xl border bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] border-slate-700' onClick={()=>setName(batter.name)}>
      <div className='h-[75%] flex justify-center items-end '> <img src={getUrlImage(batter?.name)} className='size-56' alt="" /></div>
      <div className='h-[25%] border-t rounded-b-2xl flex flex-col justify-center items-center px-1'>
        <h2 className='text-slate-300 font-semibold text-sm sm:text-base lg:text-2xl text-center'>{batter.name}</h2>
        <p className='font-medium text-[#E5E7EB] text-xs sm:text-sm lg:text-base'>{batter.role}</p>
      </div>
    </Link>
  )
}

export default TeamPlayersProfile
