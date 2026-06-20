import React, { useEffect, useState } from 'react'
import axios from "axios"
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = ({name, logo, bg}) => {

   const [data, setData] = useState(null) ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (name) {
          const response = await axios.get(`http://localhost:8000/ipl/team/${name}`);
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    }
    fetchData();
  }, [name]);


  // Loading state handle karein jab tak data na aaye
  if (!data) {
    return <div className="text-white">Loading team info...</div>;
  }

  return (
    <div className=" relative w-full h-full flex gap-44 rounded-2xl items-center border border-white ">
        <div className='flex items-center justify-center '>
            <Link to="/team">
            <h4 className='absolute top-3 left-6 flex gap-1 items-center border rounded-2xl bg-black text-white p-2'><IoChevronBackCircleOutline /> <p>Back to teams</p></h4>
            </Link>
            <img className='h-64 w-98' src={logo} alt={name} />
        </div>
        <div className=' h-full w-full px-7 py-4 flex flex-col justify-around text-amber-50'>
            <div className=' flex flex-col gap-3 '>
                <div className='flex gap-2 text-3xl font-bold items-center'>
                    <h2>{data.teamName}</h2>
                   <img className='h-9 ' src="/blueTick.png" alt="" />
                </div>
                <p className='text-gray-400'>{data.bio} </p>
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                <div>
                    <div className='text-gray-400'>Established</div>
                    <div>{data.established}</div>
                </div>
                <div>
                    <div className='text-gray-400'>Owner</div>
                    <div>{data.owner}</div>
                </div>
                <div>
                    <div className='text-gray-400'>Home Ground</div>
                    <div>{data.homeGround}</div>
                </div>
                <div>
                    <div className='text-gray-400'>Batting Coach</div>
                    <div>{data.battingCoach}</div>
                </div>
                <div>
                    <div className='text-gray-400'>Bowling coach</div>
                    <div>{data.bowlingCoach}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
