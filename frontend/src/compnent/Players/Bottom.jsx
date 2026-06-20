import { useState, useEffect, useContext } from 'react'
import axios from "axios"
import PlayerProfile from './PlayerProfile'
import {StoreContext} from '../../context/StoreContext'

const Bottom = () => {
  const { sortValue} = useContext(StoreContext);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/ipl/${sortValue}`);
        console.log(response.data);
        setPlayers(response.data)
      } catch (error) {
        console.log("error coming", error)
      }
    }
    fetchData()
  }, [sortValue]);

  return (
    <div className='w-full min-h-screen border-amber-400 border mt-4 rounded-2xl p-3 sm:p-4'>
      {
        players && Array.isArray(players) && players.length > 0 ? (
          /* Responsive grid: 2 cols mobile → 3 sm → 4 lg → 5 xl */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
            {players.map((item, index) => (
              <PlayerProfile key={index} position={index + 1} player={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-3">🏏</div>
              <div className="text-sm">NO Data found</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Bottom
