import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Resell = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar />
        <div className='py-10 border-b'>
        <div className='text-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl'>Resell to Contract</h1>
            <input 
            className='py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96'
            placeholder='Token ID'
            />
            {/* <input 
            className="py-2 px-4 rounded-3xl bg-[#282846] border-2 mt-3 mb-6 w-80 sm:w-96"
            placeholder='Home'
            /> */}
            <div className='flex w-72 justify-between py-6'>
            <p className='text-white text-2xl'>Ticket Type ➩</p>
            <select className='text-black'>
                <option>Home</option>
                <option>Away</option>
            </select>
            </div>
            <button
            className='bg-white px-12 rounded-3xl py-2 text-black '
            >Resell</button>
        </div>
        </div>
        <div className='py-10'>
        <div className='text-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl'>Resell to User</h1>
            <input 
            className='py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96'
            placeholder='Token ID'
            />
            <input 
            className="py-2 px-4 rounded-3xl bg-[#282846] border-2 mt-3 mb-6 w-80 sm:w-96"
            placeholder='Address'
            />
            <button
            className='bg-white px-12 rounded-3xl py-2 text-black mb-20'
            >Resell</button>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Resell