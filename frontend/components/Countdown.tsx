import React, {useState, useEffect} from 'react';

const countdown = () => {

    const calculateTimeLeft = (): object => {
        let year: number = new Date().getFullYear();
        const difference: number = +new Date(`${year}-11-20`) - +new Date();
        let timeLeft: object = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents: any = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
  return (
    <section className='bg-[#282846] bg-gradient-to-r from-[#282846] to-indigo-700 py-16 flex items-center justify-evenly text-white'>
        <h1 className='text-white sm:text-xl md:text2xl lg:text-3xl'>Tournament starts in &#10148;&#10148;&#10148;</h1>
        <div className='flex flex-col items-center'>
        <span className='border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]'>{timeLeft.days}</span> 
        <span className='sm:text-xl md:text2xl lg:text-3xl'>Days</span>
        </div>
        <div className='flex flex-col items-center'>
        <span className='border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]'>{timeLeft.hours}</span>
        <span className='sm:text-xl md:text2xl lg:text-3xl'>Hours</span>
        </div>
        <div className='flex flex-col items-center'>
        <span className='border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]'>{timeLeft.minutes}</span>
        <span className='sm:text-xl md:text2xl lg:text-3xl'>Minutes</span>
        </div>
        <div className='flex flex-col items-center'>
        <span className='border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]'>{timeLeft.seconds}</span>
        <span className='sm:text-xl md:text2xl lg:text-3xl'>Seconds</span>
        </div>
    </section>
  )
}

export default countdown