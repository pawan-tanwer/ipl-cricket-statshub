import React from 'react'

const BattingStats = ({localData}) => {

    const seasons = Array.from({ length: 18 }, (_, i) => (2008 + i).toString());

    // get data by season

    const getSeasonData = (year)=>{
        
        if(!localData?.battingCareerStats) return null;
         
        
        
        return localData.batting.find(s => s.season === parseInt(year)) ||null;
    }

  return (
    <div className='flex flex-col items-center  mt-6'>
      <h2 className='text-2xl font-extralight'>IPL Career Stats</h2>
      <div className='w-[90%] h-full border border-amber-600 rounded-2xl pb-4'>
        <p className='p-4 text-2xl font-serif'>Batting</p>
        <div className='flex justify-center'>
        <div className='w-[90%] b'>
            <table>
                <thead className='text-center text-amber-500' >
                    <tr >
                    <th className="py-2 px-6">Season</th>
                    <th className="py-2 px-6">Team</th>
                    <th className="py-2 px-6">Matches</th>
                    <th className="py-2 px-6">Innings</th>
                    <th className="py-2 px-6">Runs</th>
                    <th className="py-2 px-6">Highest Runs</th>
                    <th className="py-2 px-6">Average</th>
                    <th className="py-2 px-6">Strike Rate</th>
                    <th className="py-2 px-6">100s</th>
                    <th className="py-2 px-6">50s</th>
                    <th className="py-2 px-6">4s</th>
                    <th className="py-2 px-6">6s</th> 
                    </tr>   
                </thead>

                <tbody className='text-center' >
                    {seasons.map((year, index)=>{
                        const season  = getSeasonData(year);
                        console.log(season)
            
                        return  (
                            <tr key={index} >  
                            <td className="py-2 px-8">{season?.season         ??"-"}</td>
                            {season?.season >= parseInt(localData?.ipl_debut)?<td className="py-2 px-8">{localData?.team ?? "-"}</td>:"-"}
                            <td className="py-2 px-8">{season?.matches        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.innings        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.runs           ?? "-"}</td>
                            <td className="py-2 px-8">{season?.high_score     ?? "-"}</td>
                            <td className="py-2 px-8">{season?.average        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.strike_rate    ?? "-"}</td>
                            <td className="py-2 px-8">{season?.centuries      ??"-"}</td>
                            <td className="py-2 px-8">{season?.half_centuries ?? "-"}</td>
                            <td className="py-2 px-8">{season?.fours          ?? "-"}</td>
                            <td className="py-2 px-8">{season?.sixes           ??"-"}</td>
                        </tr>)
                        })}
                
                </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BattingStats
