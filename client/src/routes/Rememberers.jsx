import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import RemImg from '../assets/scifi-background.jpg';
import { IoIosArrowDropdown } from "react-icons/io";
import RemIntro from '../components/rememberers/RemIntro.jsx';
import RemBk from '../components/rememberers/RemBk';

const Rememberers = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <Header image={RemImg} title={'ABOUT THE SERIES'} color='text-green' box=<IoIosArrowDropdown className='mt-6 transition-transform hover:scale-110' size={40} style={{fill: '#00ffff'}} onClick={()=> location.href='#series'} /> />
        <RemIntro />
        <RemBk />
        <SignUp />
        <Footer />
    </div>
  );
};

export default Rememberers;
