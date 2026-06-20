import React, { createContext, useEffect, useState } from 'react'

const StoreContext = createContext();

const StoreContextProvider = (props) => {

  const [name, setName] = useState(localStorage.getItem("playerName") || ""); // use for store playet name
  const[sortValue,setSortValue] = useState("mostRuns");// use in Players page for sorting
  const[searchIcon,setSearchIcon]= useState(false);
  const url="fair-items-bathe.loca.lt/";

   const saveName = (playerName) => {
    localStorage.setItem("playerName", playerName)  // save
    setName(playerName)                              // state update
  }

   const [teamName, setTeamName] = useState(() => {
    const savedTeam = localStorage.getItem('selectedTeam')
    return savedTeam || null
  })

  // Jab teamName change ho, localStorage mein save karo
  useEffect(() => {
    if (teamName) {
      localStorage.setItem('selectedTeam', teamName)
    }
  }, [teamName])

  const teamDetails = [
    {
      "team":"Chennai Super Kings",
      "logo":"/teams/Chennai Super Kings.png",
      date:2008,
      "bg": "#F5C518",
      "text": "#0A2463",
      accent: "#0A2463",
    statColor: "#1A1A2E",
    },
    {
      "team":"Delhi Capitals",
      "logo":"/teams/Delhi Capitals.png",
      "date":2008,
      "bg": "#0078BC",
      "text": "#EF1C25",
       accent: "#FF9AA2",
    statColor: "#FFFFFF",
    },
    {
      "team":"Gujarat Titans",
      "logo":"/teams/Gujarat Titans.png",
      "date":2022,
      "bg": "#1C2B4A",
      "text": "#E8C96A",
      accent: "#E8C96A",
    statColor: "#FFFFFF",
    },
    {
      "team":"Kolkata Knight Riders",
      "logo":"/teams/Kolkata Knight Riders.png",
      "date":2008,
      "bg": "#3A225D",
      "text": "#F5C518",
       accent: "#C49FE6",
    statColor: "#F5C518",
    },
    {
      "team":"Lucknow Super Giants",
      "logo":"/teams/Lucknow Super Giants.png",
      "date":2022,
      "bg": "#00AAE4",
      "text": "#FFFFFF",
        accent: "#DFFFFF",
    statColor: "#FFFFFF",
    },
    {
      "team":"Mumbai Indians",
      "logo":"/teams/Mumbai Indians.png",
      "date":2008,
      "bg": "#004BA0",
      "text": "#FFFFFF",
       accent: "#A8C8FF",
    statColor: "#FFFFFF",
    },
    {
      "team":"Punjab Kings",
      "logo":"/teams/Punjab Kings.png",
      "date":2008,
      "bg": "#ED1B24",
      "text": "#FFFFFF",
         accent: "#FFD700",
    statColor: "#FFFFFF",
    },
    {
      "team":"Rajasthan Royals",
      "logo":"/teams/Rajasthan Royals.png",
      "date":2008,
      "bg": "#EA1A85",
      "text": "#FFFFFF",
          accent: "#FFD1EC",
    statColor: "#FFFFFF",
    },
    {
      "team":"Royal Challengers Bangalore",
      "logo":"/teams/Royal Challengers Bangalore.png",
      date:2008,
      "bg": "#CC0000",
      "text": "#000000",
      accent: "#FFD700",
    statColor: "#FFFFFF",
    },
    {
      "team":"Sunrisers Hyderabad",
      "logo":"/teams/Sunrisers Hyderabad.png",
      date:2013,
      "bg": "#FF6B00",
      "text": "#000000",
      accent: "#1A1A1A",
    statColor: "#000000",
    }
  ]

  const value = {
    setName,
    name,
    saveName,
    teamDetails,
    setTeamName,
    teamName,
    setSortValue,
    sortValue,
    searchIcon,
    setSearchIcon,url
  }

  return (
    <div>
      <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    </div>
  )
}

export {StoreContextProvider,StoreContext}
