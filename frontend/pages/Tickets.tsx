import React from 'react'
import MatchCard from '../components/MatchCard'
import Navbar from '../components/Navbar'

const Tickets = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
        <Navbar />
        <div className='lg:px-36'>
            <div className='flex items-center justify-center pt-16'>  
            <h1 className='text-3xl inline text-white sm:text-4xl border-b-2 pb-3'>Matches</h1>
            </div>
            <div className='flex flex-col items-center py-5 md:flex-row md:flex-wrap md:justify-evenly'>
            <MatchCard 
            countries={[
              { name: "Qatar", code: "QT" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            <MatchCard 
            countries={[
              { name: "England", code: "GB" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            <MatchCard 
            countries={[
              { name: "England", code: "GB" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            <MatchCard 
            countries={[
              { name: "England", code: "GB" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            <MatchCard 
            countries={[
              { name: "England", code: "GB" },
              { name: "Ecuador", code: "EC" }
            ]}
            />
            </div>
        </div>
    </div>
  )
}

export default Tickets