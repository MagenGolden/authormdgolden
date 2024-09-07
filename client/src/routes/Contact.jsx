import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import ContactImg from '../assets/scifi-landscape.jpg';
import { IoIosArrowDropdown } from "react-icons/io";
import Form from '../components/contact/Form';

const Contact = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <Header image={ContactImg} title={'Contact Us'} color='text-green' box=<IoIosArrowDropdown className='mt-6 transition-transform hover:scale-110' size={40} style={{fill: '#00ffff'}} onClick={()=> location.href='#contact'} />/>
        <p className='mt-60 text-orange text-2xl'>Send A Message</p>
        <Form />
        <SignUp />
        <Footer />
    </div>
  );
};

export default Contact;
