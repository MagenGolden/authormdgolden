import React from 'react';
import {useState, useEffect } from 'react';

const endTarget = new Date('2025-11-25T23:59:59');
const getTimeLeft = () => {
  const totalTimeLeft = endTarget - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const HomeTimer = () => {

const [timeLeft, setTimeLeft] = useState (() => getTimeLeft());
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(getTimeLeft());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

  return (
    <section>
      <h1 className='text-green'>THE INVASION</h1>
      <p className='text-orange'>Book 3 of 4</p>
      <p className='text-blue'>release countdown</p>
      <div className='mt-10 flex flex-wrap items-center justify-evenly'>
        <div className='w-64 flex justify-evenly text-green text-2xl'>{timeLeft.days}<p className='text-orange'>Days</p></div>
        <div className='w-64 flex justify-evenly text-green text-2xl'>{timeLeft.hours}<p className='text-orange'>Hours</p></div>
        <div className='w-64 flex justify-evenly text-green text-2xl'>{timeLeft.minutes}<p className='text-orange'>Minutes</p></div>
        <div className='w-64 flex justify-evenly text-green text-2xl'>{timeLeft.seconds}<p className='text-orange'>Seconds</p></div>
      </div>
    </section>
  );
};

export default HomeTimer;
