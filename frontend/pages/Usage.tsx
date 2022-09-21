import React from 'react';
import Navbar from '../components/Navbar';
import image from '../public/img/WC.png';
import Image from 'next/image';
import Footer from '../components/Footer';

const Usage = () => {
  return (
    <div>
        <Navbar />
        <div className='bg-[#07031A] min-h-screen text-white'>
            <h1 className='text-4xl md:text-5xl text-center py-14 md:py-20'>How To Use?</h1>
                <h1 className='text-4xl text-center py-10'>Step One</h1>
            <div className='flex sm:px-24 md:px-32 lg:px-36'>
                <div className='w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32'>
                    <h2 className='text-3xl pb-8'>Connect your Wallet</h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Nam quibusdam <br /> explicabo assumenda.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center w-6/12'>
                <Image
                  src={image}
                  className="rounded-full object-cover"
                  width={300}
                  height={300}
                />
                </div>
            </div>
                <h1 className='text-4xl text-center pt-32 pb-10'>Step Two</h1>
            <div className='flex sm:px-24 md:px-32 lg:px-36'>
                <div className='flex flex-col items-center justify-center w-6/12'>
                <Image
                  src={image}
                  className="rounded-full object-cover"
                  width={300}
                  height={300}
                />
                </div>
                <div className='w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32'>
                    <h2 className='text-3xl pb-8'>Connect your Wallet</h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Nam quibusdam <br /> explicabo assumenda.
                    </p>
                </div>
            </div>
                <h1 className='text-4xl text-center pt-32 pb-10'>Step Three</h1>
            <div className='flex sm:px-24 md:px-32 lg:px-36'>
                <div className='w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32'>
                    <h2 className='text-3xl pb-8'>Connect your Wallet</h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Nam quibusdam <br /> explicabo assumenda.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center w-6/12'>
                <Image
                  src={image}
                  className="rounded-full object-cover"
                  width={300}
                  height={300}
                />
                </div>
            </div>
            <div className='flex flex-col items-center py-24'>
            <iframe width="760" height="455" src="https://www.youtube.com/embed/fs5Xp1P8Gck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Usage