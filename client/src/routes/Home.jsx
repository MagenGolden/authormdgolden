import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import HomeImg from '../assets/cover.jpg';
import HomeBook from '../components/home/HomeBook';
import HomeNext from '../components/home/HomeNext';
import HomeAuthor from '../components/home/HomeAuthor';
import HomeTimer from '../components/home/HomeTimer';

const Home = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <Header image={HomeImg} title={'M.D. Golden'} sub={'ESCAPE INTO THE WORLD OF TOMORROW'} box=<button className='bg-green font-atomic p-2 rounded-xl mt-4 transition-transform hover:scale-90' onClick={()=> location.href='/store'} >Visit Store</button> />
        <HomeBook />
        <HomeNext />
        <HomeAuthor />
        <HomeTimer />
        <SignUp />
        <Footer />
    </div>
  );
};

export default Home;
