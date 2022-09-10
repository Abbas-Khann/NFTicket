import React from 'react'
import GameDetails from '../components/GameDetails'
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
    </div>
  )
}

export default matchDetails