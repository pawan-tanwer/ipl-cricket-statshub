import React from 'react'

const BowlingStats = ({localData}) => {

    const seasons = Array.from({ length: 18 }, (_, i) => (2008 + i).toString());

    // get data by season

    const getSeasonData = (year)=>{
        
        if(!localData?.battingCareerStats) return null;
         
        
        
        return localData.bowling.find(s => s.season === parseInt(year)) ||null;
    }

  return (
    <div className='flex flex-col items-center  mt-6'>
      <div className='w-[90%] h-full border border-amber-600 rounded-2xl pb-4'>
        <p className='p-4 text-2xl font-serif'>Bowling</p>
        <div className='flex justify-center'>
        <div className='w-[90%] b'>
            <table>
                <thead className='text-center text-amber-500' >
                    <tr >
                    <th className="py-2 px-6">Season</th>
                    <th className="py-2 px-6">Team</th>
                    <th className="py-2 px-6">Matches</th>
                    <th className="py-2 px-6">Balls</th>
                    <th className="py-2 px-6">Runs conceded</th>
                    <th className="py-2 px-6">Wickets</th>
                    <th className="py-2 px-6">Average</th>
                    <th className="py-2 px-6">Economy</th>
                    <th className="py-2 px-6">Best Bowling</th>
                    <th className="py-2 px-6">Strike Rate</th>
                    <th className="py-2 px-6">4W</th>
                    <th className="py-2 px-6">5W</th> 
                    </tr>   
                </thead>

                <tbody className='text-center' >
                    {seasons.map((year, index)=>{
                        const season  = getSeasonData(year);
            
                        return  (
                            <tr key={index} >  
                            <td className="py-2 px-8">{season?.season         ??"-"}</td>
                            {season?.season >= parseInt(localData?.ipl_debut)?<td className="py-2 px-8">{localData?.team ?? "-"}</td>:"-"}
                            <td className="py-2 px-8">{season?.matches        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.balls        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.runs_conceded           ?? "-"}</td>
                            <td className="py-2 px-8">{season?.wickets     ?? "-"}</td>
                            <td className="py-2 px-8">{season?.average        ?? "-"}</td>
                            <td className="py-2 px-8">{season?.economy    ?? "-"}</td>
                            <td className="py-2 px-8">{season?.best_bowling      ??"-"}</td>
                            <td className="py-2 px-8">{season?.strike_rate ?? "-"}</td>
                            <td className="py-2 px-8">{season?.four_wicket_hauls          ?? "-"}</td>
                            <td className="py-2 px-8">{season?.five_wickets_hauls           ??"-"}</td>
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

export default BowlingStats
