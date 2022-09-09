import React,{ useState } from 'react'
import Image from 'next/image'

const MatchCard = (props: any): JSX.Element => {

  const { countries }: { countries: { name: string; code: string  }[] } = props
  const {date}: { date: {gameDate: string}[] } = props

  
  return (
    <div className='my-5 bg-[#E5E5E5] py-3 sm:py-10 sm:px-14 w-full sm:rounded-lg h-56 flex flex-col justify-evenly sm:w-2/3 md:m-w-lg lg:max-w-md'>
      {date.map((match, index) => {
        return <div key={index} className='text-2xl text-center pt-5 pb-3'>{match.gameDate}</div>
      })}
      {countries.map((country, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-end justify-start px-8 py-2 rounded-xl bg-[#ffffff] my-1"
          >
            {/* <div className="basis-1/2 w-full flex justify-evenly px-6 py-1"> */}
              <div className="text-xs relative w-10 h-8 flex flex-col items-end justify-start py-3">
                <Image
                  src={`https://countryflagsapi.com/png/${country.code}`}
                  alt="Flag"
                  layout="fill"
                  priority
                />
              </div>
            <h1 className="text-lg py-1 ml-8">{country.name}</h1>
            {/* </div> */}
          </div>
        );
      })}
        <div className='text-sm flex justify-between text-[#606C7C] px-2 sm:pt-5 md:pb-3'>
            <p className='text-center'>Al Bayt Stadium, Al Khor</p>
            <a href='#' target="_blank" className='text-center'>Match Details</a>
        </div>
    </div>
  )
}

export default MatchCard