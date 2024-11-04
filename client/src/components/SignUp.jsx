import React from 'react';
import { useState } from 'react';
import FormBg from '../assets/abandoned.jpg';
import FormBk from '../assets/book2-group.png';

const SignUp = () => {

const [name, setName] = useState ('');
const [email, setEmail] = useState ('');

  return (
    <section id='signUp' className='mt-10'>
      <div className='bg-gradient-to-b from-black via-transparent to-transparent'>
        <img className='relative -z-10 tablet:h-[455px] h-[500px] w-full object-cover' src={FormBg} alt="" />
      </div>
      <div className='tablet:flex items-center -mt-[480px] tablet:-mt-[400px]'>
        <img className='w-[350px] tablet:w-1/2' src={FormBk} alt="" />
        <div className='w-[350px] tablet:w-1/2'>
          <p className='text-blue text-md'>JOIN THE FIGHT</p>
          <p className='text-green text-xl'>THE REMEMBERERS</p>
          <p className='w-4/5 m-auto text-sm font-medium'>Sign-up to get updates on when the next book on the series will be released. As an added bonus you will get the first chapter of book 2 absolutely free!</p>
          <form className='mt-2'>
            <input className='border-2 border-blue text-black' type="text" placeholder='First Name' value={name} size='10'
                   onChange={ (e) => setName(e.target.value) }/>
            <input type='text' className='border-2 border-blue' placeholder='Email' value={email} size='15' onChange={(e)=> setEmail(e.target.value)} />
            <button className='bg-blue border-blue border-2 px-1' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
