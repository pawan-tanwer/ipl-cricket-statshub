import React, { useContext, useEffect, useState } from 'react'
import { FaTrophy } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const HeaderBotton = () => {

    const {teamName} = useContext(StoreContext);
    const [data, setData] = useState(null);
    const [winningYears,setWinningYears] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const encodedName = encodeURIComponent(teamName);
            const response = await axios.get(`http://localhost:8000/ipl/final/team/${encodedName}`)
            setData(response.data)
            setWinningYears(response.data.winningYear)
        }
        fetchData()
    },[teamName])

    useEffect(()=>{
        console.log("totalMatches: ",data?.totalMatches)
    })

    return (<div className='flex gap-5 items-center w-full h-full  px-5 text-amber-50'>
        <div className='w-1/5 h-full text-center rounded-2xl flex justify-around border'>
            <div className='flex items-center text-amber-300'>
                <FaTrophy className='size-16' />
            </div>
            <div className='flex flex-col gap-0.5 justify-center items-center'>
                <h3 className='text-3xl font-bold'>{data?.teamTrophy }</h3>
                <p>IPL Titles</p>
                <div className='flex gap-0.5 justify-start'>
                     {
                    winningYears && Array.isArray(winningYears) && winningYears.length>0 ?(
                       winningYears.map((win,index)=>(
                        <p  key={index}>{win.year}</p>
                       ))
                    ):
                    (
                        <div> </div>
                    )
                }
                </div>
            </div>
        </div>
        <div className='w-1/5 h-full text-center rounded-2xl flex justify-around items-center border'>
            <div className='flex items-center text-blue-500'>
                <FaCalendarAlt className='size-16'/>
            </div>
            <div className='flex flex-col gap-0.5 justify-center items-center'>
                <h2 className='font-bold text-3xl'>{data?.totalMatches}</h2>
                <p>Total Matches</p>
            </div>
        </div>
        <div className='w-1/5 h-full text-center rounded-2xl flex justify-around items-center border'>
        <div className='flex items-center text-emerald-400'>
            <GiProfit className='size-16'/>
        </div>
        <div className='flex flex-col gap-0.5 justify-center items-center'>
            <h2 className='font-bold text-3xl'>{data?.teamWin}</h2>
            <p>Win</p>
        </div>
        </div>
        <div className='w-1/5 h-full text-center rounded-2xl flex justify-around items-center border'>
        <div className='flex items-center text-orange-700'>
            <FaWindowClose className='size-16'/>
        </div>
        <div className='flex flex-col gap-0.5 justify-center items-center'>
            <h2 className='font-bold text-3xl'>{data?.totalMatches - data?.teamWin}</h2>
            <p>Loss</p>
        </div>
        </div>
        <div className='w-1/5 h-full text-center rounded-2xl flex justify-around items-center border'>
        <div className='flex items-center text-cyan-700'>
            <MdOutlineAutoGraph className='size-16'/>
        </div>
        <div className='flex flex-col gap-0.5 justify-center items-center'>
            <h2 className='font-bold text-3xl'>{data?.winningPercentage}</h2>
            <p>Win Percentage</p>
        </div>
        </div>
    </div>
    )
}

export default HeaderBotton
