import React, { useState, useEffect } from "react";

// TimeLeft Object
interface TimeLeft {
  [key: string]: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const countdown = () => {
  // Returns a null or filled object with days,seconds,mins and hours if remaining time
  const calculateTimeLeft = (): TimeLeft => {
    let year: number = new Date().getFullYear();
    const difference: number = +new Date(`${year}-11-20`) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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

  const timerComponents: JSX.Element[] = [];

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); // Holds the current time
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    // Get the current time every second
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  // Add to the `timerComponents` array if there is a time remaining
  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] == 0) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="bg-[#282846] bg-gradient-to-r from-[#282846] to-indigo-700 py-16 flex items-center justify-evenly text-white">
      <h1 className="text-white sm:text-xl md:text2xl lg:text-3xl">
        Tournament starts in &#10148;&#10148;&#10148;
      </h1>
      <div className="flex flex-col items-center">
        <span className="border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]">
          {timeLeft.days}
        </span>
        <span className="sm:text-xl md:text2xl lg:text-3xl">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]">
          {timeLeft.hours}
        </span>
        <span className="sm:text-xl md:text2xl lg:text-3xl">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]">
          {timeLeft.minutes}
        </span>
        <span className="sm:text-xl md:text2xl lg:text-3xl">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="border-b-2 border-[#FFFFFF] font-black sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200]">
          {timeLeft.seconds}
        </span>
        <span className="sm:text-xl md:text2xl lg:text-3xl">Seconds</span>
      </div>
    </section>
  );
};

export default countdown;
