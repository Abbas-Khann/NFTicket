import React from 'react'
import Footer from '../components/Footer'
import MatchCard from '../components/MatchCard'
import Navbar from '../components/Navbar'

const Tickets = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
        <Navbar />
        <div className='lg:px-36 pb-24'>
            <div className='flex items-center justify-center pt-16 pb-20'>  
            <h1 className='text-3xl inline text-white sm:text-4xl border-b-2 pb-3'>Matches</h1>
            </div>
            <div className='flex flex-col items-center py-5 md:flex-row md:flex-wrap md:justify-evenly'>
            <MatchCard 
            date={[ 
              { gameDate: "21 November 2022" }
            ]}
            countries={[
              { name: "Qatar", code: "QAT" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            <MatchCard
            date={[ 
              { gameDate: "21 November 2022" }
            ]} 
            countries={[
              { name: "England", code: "GB" },
              { name: "IR Iran", code: "IRN" }
            ]}
            />
            <MatchCard 
            date={[ 
              { gameDate: "25 November 2022" }
            ]}
            countries={[
              { name: "England", code: "GB" },
              { name: "USA", code: "US" }
            ]}
            />
            <MatchCard
            date={[ 
              { gameDate: "22 November 2022" }
            ]} 
            countries={[
              { name: "France", code: "FR" },
              { name: "Australia", code: "AUS" }
            ]}
            />
            <MatchCard 
            date={[ 
              { gameDate: "25 November 2022" }
            ]}
            countries={[
              { name: "Poland", code: "PL" },
              { name: "Argentina", code: "ARG" }
            ]}
            />
            <MatchCard
            date={[ 
              { gameDate: "27 November 2022" }
            ]} 
            countries={[
              { name: "Spain", code: "ESP" },
              { name: "Germany", code: "DEU" }
            ]}
            />
            <MatchCard
            date={[ 
              { gameDate: "30 November 2022" }
            ]} 
            countries={[
              { name: "Australia", code: "AUS" },
              { name: "Denmark", code: "DNK" }
            ]}
            />
            <MatchCard
            date={[ 
              { gameDate: "28 November 2022" }
            ]} 
            countries={[
              { name: "Portugal", code: "PT" },
              { name: "Uruguay", code: "URY" }
            ]}
            />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Tickets