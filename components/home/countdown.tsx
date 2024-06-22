"use client";
import React, { useState, useEffect } from 'react';
import { Teko } from 'next/font/google';

interface CountdownTimerProps {
  dateTime: string;
}

const teko = Teko({ subsets: ['latin'] });

const CountdownTimer: React.FC<CountdownTimerProps> = ({ dateTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const targetDate = new Date(dateTime)
    const now = new Date()
    const offsetHours = 7;
    now.setHours(now.getHours() + offsetHours);
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => clearInterval(timerInterval);
  }, [dateTime]);

  const { days, hours, minutes } = timeRemaining;
  const padZero = (num: number) => (num < 10 ? `0${num}` : num);

  if (days === 0 && hours === 0 && minutes === 0) {
    return <div>Countdown selesai!</div>;
  }

  return (
    <div className="flex flex-col text-sm text-[#292a41] opacity-70 pr-[18px] md:pr-0">
      <div className='flex'>
        <div className="flex flex-col items-center">
          <div className={`text-xl px-3 pt-2 pb-[3px] border border-[#292a417f] hover:bg-[#292a41] hover:text-white rounded-md font-black ${teko.className}`}>{padZero(days)}</div>
          <p className="font-display">Hari</p>
        </div>
        <div className="text-lg font-black pt-1 px-1">:</div>
        <div className="flex flex-col items-center">
          <div className={`text-xl px-3 pt-2 pb-[3px] border border-[#292a417f] hover:bg-[#292a41] hover:text-white rounded-md font-black ${teko.className}`}>{padZero(hours)}</div>
          <p className="font-display">Jam</p>
        </div>
        <div className="text-lg font-black pt-1 px-1">:</div>
        <div className="flex flex-col items-center">
          <div className={`text-xl px-3 pt-2 pb-[3px] border border-[#292a417f] hover:bg-[#292a41] hover:text-white rounded-md font-black ${teko.className}`}>{padZero(minutes)}</div>
          <p className="font-display">Menit</p>
        </div>
      </div>
      <div className="flex mt-1">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#292a41" width="16px" height="16px" style={{ marginRight: 3 }}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Calendar / Timer"> <path id="Vector" d="M12 13V9M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" stroke="#292a41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
        <p className="font-display text-xs">18 September 2024, 23:59</p>
      </div>
    </div>
  );
};

export default CountdownTimer;