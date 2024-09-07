import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import AboutImg from '../assets/scifi-sky.jpg';
import { IoIosArrowDropdown } from "react-icons/io";
import MeetAuthor from '../components/about/MeetAuthor.jsx';

const About = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <Header image={AboutImg} title={'Meet The Author'} color='text-green' box=<IoIosArrowDropdown className='mt-6 transition-transform hover:scale-110' size={40} style={{fill: '#ffa500'}} onClick={()=> location.href='#about'} />/>
        <MeetAuthor />
        <SignUp />
        <Footer />
    </div>
  );
};

export default About;
