import React from 'react'

const Card = (): JSX.Element => {
  return (
    <section className='bg-[#E5E5E5] py-3 px-4 rounded-lg w-80 h-72 flex flex-col justify-evenly'>
        <div className='flex items-center justify-evenly basis-2/12 rounded-2xl py-1 bg-[#ffffff]'>
            <h1 className='text-4xl'>🇶🇦</h1>
            <h1 className='mr-5 text-lg'>Qatar</h1>
        </div>
        <div className='flex items-center justify-evenly basis-2/12 rounded-2xl py-1 bg-[#ffffff]'>
            <h1 className='text-4xl'>🇶🇦</h1>
            <h1 className='mr-5 text-lg'>Qatar</h1>
        </div>
        <div className='flex items-center justify-evenly basis-2/12 rounded-2xl py-1 bg-[#ffffff]'>
            <h1 className='text-4xl'>🇶🇦</h1>
            <h1 className='mr-5 text-lg'>Qatar</h1>
        </div>
        <div className='flex items-center justify-evenly basis-2/12 rounded-2xl py-1 bg-[#ffffff]'>
            <h1 className='text-4xl'>🇶🇦</h1>
            <h1 className='mr-5 text-lg'>Qatar</h1>
        </div>
    </section>
  )
}

export default Card