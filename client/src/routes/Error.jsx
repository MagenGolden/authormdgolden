import React from 'react';
import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorImg from '../assets/ufo.jpg';

const Error = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <header>
        <img src={ErrorImg} className='h-80 w-full' />
        <h1 className='absolute inset-x-1 top-32 leading-none text-green'>Are you lost friend?</h1>
      </header>
      <main className='h-80 content-center'>
        <h2>The adventure you seek could not be found...</h2>
        <p className='mt-10 lg:mx-40'>The page that has been requested could not be found. Please check that you have typed your destination correctly. If the error presist, feel free to <NavLink className='text-blue' to='/contact-us'>contact us</NavLink>.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
