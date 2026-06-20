import React, {useContext ,useEffect,useState} from 'react'
import { StoreContext } from '../context/StoreContext'
import Header from '../compnent/ParticularTeam/Header';
import HeaderBotton from '../compnent/ParticularTeam/HeaderBotton';
import Bottom from '../compnent/ParticularTeam/Bottom';


const ParticularTeam = () => {

    const {teamDetails,teamName} = useContext(StoreContext);
    const [team,setTeam] = useState()

    useEffect(()=>{
        const teamsData = teamDetails.find((team)=>team.team === teamName);
        setTeam(teamsData);
    },[teamName])

  return (
    <div className="h-full w-full bg-[#0A1428] px-8 pt-3 ">
      <div className="border rounded-2xl w-full h-96 ">
        <Header name={team?.team} logo={team?.logo}  bg={team?.bg} />
      </div>
      <div className='w-full h-36 mt-3'>
        <HeaderBotton/>
      </div>
      <div className='w-full h-full border mt-4 rounded-2xl border border-white'>
        <Bottom/>
      </div>
    </div>
  )
}

export default ParticularTeam
