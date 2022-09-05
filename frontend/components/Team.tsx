import React from 'react'
import Image from 'next/image'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import abbas from '../assets/abbas.jpeg'
import LJ from "../assets/Lj.jpg";
import Yanuka from '../assets/Yanuka.jpeg';
import Link from 'next/link';

const Team = () => {

  const LarryData =
    {
      name: "Larry Cuts",
      twitter: "https://twitter.com/LarryCutts6",
      github: "https://github.com/ljcutts",
      linkedln: "https://www.linkedin.com/in/larry-cutts-742406169/"
    }

    const AbbasData = {
      name: "Abbas Khan",
      twitter: "https://twitter.com/KhanAbbas201",
      github: "https://github.com/Abbas-Khann",
      linkedln: "https://www.linkedin.com/in/abbas-khan-033802222"
    }

    const YanukaData = {
      name: "Yanuka",
      twitter: "https://twitter.com/yanukadeneth99",
      github: "https://github.com/yanukadeneth99",
      linkedln: "https://www.linkedin.com/in/yanukadeneth99",
    }

  return (
    <div className='text-white pb-2'>
        <h1 className='text-3xl text-center pb-12 sm:text-4xl md:text-5xl'>Meet the Team</h1>
        <div className='sm:flex items-center justify-around'>
        <div className='p-4 rounded-lg bg-[#F5F5F5] text-black w-56 text-center mx-auto'>
          <div className='h-full w-full flex items-center justify-center '>
            <Image src={LJ} className="rounded-full" height={300} width={290}  />
          </div>
          <div className='flex flex-col'>
          <h3>{LarryData.name}</h3>
          <p className='text-[#606C7C] py-3'>Smart Contract Engineer</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <Link href={LarryData.twitter}>
            <AiOutlineTwitter className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer'
            />
            </Link>
            <Link href={LarryData.github}>
            <AiFillGithub className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
            <Link href={LarryData.linkedln}>
            <AiFillLinkedin className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
          </div>
        </div>
        <div className='p-4 rounded-lg bg-[#F5F5F5] text-black w-56 text-center my-14 mx-auto'>
          <div className='h-full w-full flex items-center justify-center'>
            <Image src={abbas} className="rounded-full" height={300} width={290}  />
          </div>
          <div className='flex flex-col'>
          <h3>{AbbasData.name}</h3>
          <p className='text-[#606C7C] py-3'>Team Lead and Frontend Developer</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <Link href={AbbasData.twitter}>
            <AiOutlineTwitter className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
            <Link href={AbbasData.github}>
            <AiFillGithub className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            onClick={() => AbbasData.github}
            />
            </Link>
            <Link href={AbbasData.linkedln}>
            <AiFillLinkedin className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            onClick={() => AbbasData.linkedln}
            />
            </Link>
          </div>
        </div>
        <div className='p-4 rounded-lg bg-[#F5F5F5] text-black w-56 text-center mx-auto'>
          <div className='h-full w-full flex items-center justify-center '>
            <Image src={Yanuka} className="rounded-full" height={300} width={250}  />
          </div>
          <div className='flex flex-col'>
          <h3>{YanukaData.name}</h3>
          <p className='text-[#606C7C] py-3'>Full Stack Engineer</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <Link href={YanukaData.twitter}>
            <AiOutlineTwitter className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
            <Link href={YanukaData.github}>
            <AiFillGithub className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
            <Link href={YanukaData.linkedln} target="_blank">
            <AiFillLinkedin className='text-3xl bg-gray-300 rounded-full p-1 cursor-pointer' 
            />
            </Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Team