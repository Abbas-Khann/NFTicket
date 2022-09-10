import React from 'react'
import Image from 'next/image'
import { match } from 'assert';

const GameInfo = ({
    countries,
  }: {
    countries: { name: string; gameDate: string }[],
  }): JSX.Element => {
  return (
    <div className='bg-[#282846] text-white'>
        <div>
        {countries.map((country, index) => {
        return (
          <div
            key={index}
            className=""
            >
              <div className="text-xs relative w-10 h-6">
                {/* <Image
                  src={`https://countryflagsapi.com/png/${country.code}`}
                  alt="Flag"
                  layout="fill"
                  priority
                /> */}
                <h1>{country.name}</h1>
                <h1>{country.gameDate}</h1>
              </div>
          </div>
        );
    })}
        </div>
    </div>
  )
}

export default GameInfo