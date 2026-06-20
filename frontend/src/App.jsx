import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import PlayerFullProfile from './Pages/PlayerFullProfile'
import Navbar from './compnent/Navbar'
import Team from './Pages/Team'
import ParticularTeam from './Pages/ParticularTeam'
import IplFinal from './Pages/IplFinal'
import Players from './Pages/Players'
import { SearchIcon } from 'lucide-react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<PlayerFullProfile/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/particularTeam' element={<ParticularTeam/>} />
        <Route path='/iplFinals' element={<IplFinal/>} />
        <Route path='/players' element={<Players/>}/>
      </Routes>
      
    </div>
  )
}

export default App
