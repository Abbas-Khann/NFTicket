import React from 'react'
import Image from 'next/image'

const GameDetails = ({
    countries,
  }: {
    countries: { name: string; code: string }[];
  }): JSX.Element => {
  return (
    <div className='bg-[#282846]'>
        <div>
        {countries.map((country, index) => {
        return (
          <div
            key={index}
            className=""
            >
              <div className="text-xs relative w-10 h-6">
                <Image
                  src={`https://countryflagsapi.com/png/${country.code}`}
                  alt="Flag"
                  layout="fill"
                  priority
                />
              </div>
          </div>
        );
    })}
        </div>
    </div>
  )
}

export default GameDetails