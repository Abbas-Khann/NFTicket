import React from 'react'
import GameDetails from '../components/GameDetails'
import GameInfo from '../components/GameInfo'
import Navbar from '../components/Navbar'

const matchDetails = () => {
  return (
    <div>
        <Navbar />
        <GameDetails 
        countries={[
            { name: "Qatar", code: "QAT" },
            { name: "Ecuador", code: "EC" }
          ]}
        />
        <GameInfo 
        countries={[
            { name: "Qatar", gameDate: "20:30" },
            { name: "Ecuador", gameDate: "" }
          ]}
        />
    </div>
  )
}

export default matchDetails