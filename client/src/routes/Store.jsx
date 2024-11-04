import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import StoreImg from '../assets/cover.jpg';
import { FaCircleArrowDown } from "react-icons/fa6";
import StoreBook from '../components/store/StoreBook';
import StoreBk1 from '../assets/book1.png';
import StoreBk2 from '../assets/book2.png';
import StoreBk3 from '../assets/book3.png';

const Store = () => {

  useEffect(() => {
	window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <Header image={StoreImg} title={'M.D. Golden'} sub={'ESCAPE INTO THE WORLD OF TOMORROW'} box=<FaCircleArrowDown className='mt-6 transition-transform hover:scale-110' size={40} style={{fill: '#ffa500'}} onClick={()=> location.href='#store'} /> />
        <StoreBook margin='mt-52' storeImg={StoreBk1} storeTitle='THE REMEMBERERS' storeSub='Book 1 of 4' storeText={<p className='text-left text-sm'>When every man over the age of 18 is taken away, never to be seen again, Matt goes on a search to find his father.
          <br /><br />
                                                                                                                    An alien race lands on Earth looking for a haven to make their home. In exchange for information that could save the human race from extinction, they are given a place to live among the current inhabitants of the planet. They also agree to help the human race fight against any other enemy that might wish to do them harm.
          <br /><br />
                                                                                                                    The day comes when the human race and this new alien race must team together to fight a common enemy. All men over the age of 18 are taken to training camps and never seen again. A young boy is confused when he remembers his father going off for training, but no one else does.
          <br /><br />
                                                                                                                    Matt attends a weekly meeting of others who remember their fathers. It is dangerous to share this information with the wrong people. Matt believes his new group of friends should fight back and find what happened to the men. His only supporter is a new member that he does not trust.
          <br /><br />
                                                                                                                    When he finds himself in a strange new world, he must overcome obstacles that stand in his way of finding his father. He enters into a journey with his new friend to save the human race. Will he make it out alive?
          <br /><br />
                                                                                                                    This novel lives somewhere between the novels The Maze Runner, City of Ember, and the movie The Matrix</p>} bkUrl={'https://www.amazon.com/gp/product/B07NY44YKM?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=1708229546&sr=8-1'} />
        <StoreBook direction='flex-row-reverse' storeTitle='The Rebellion' storeSub='Book 2 of 4' storeText={<p className='text-left text-sm'>If you discovered that everyone you knew was in danger, would you risk your life to save theirs?
          <br /><br />
                                                                                                                           Ed’s neighbors start going missing, but no one else seems to notice. When the house next to his goes under construction and his best friend doesn’t remember the family that lived there before, Ed decides to find the culprit for his friend’s sudden amnesia.
          <br /><br />
                                                                                                                           The radio is brainwashing people into forgetting their loved ones, and those who remember are in danger. Ed must risk it all to save his friends and family. He enlist the help of his best friend and devises a plan to save those that are being targeted.
          <br /><br />
                                                                                                                           The two friends are feeling good about the people they save, but what are they to do next? Why are people being taken? What is it that the Heads are trying to hide? Who will be taken next? Is there a way out?
          <br /><br />
                                                                                                                           Ed escapes to a new world, but needs to find a way to bring his friends and family with him. He must navigate himself through an unknown land, fight dangers he had never encountered before, and save the world from an all too familiar threat. Will he be successful? Will he live to see his son again?</p>} storeImg={StoreBk2} bkUrl={'https://www.amazon.com/gp/product/B09G21YKL7?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&qid=1708229546&sr=8-1'} />
        <StoreBook storeTitle='The Invasion' storeSub='Book 3 of 4' storeText={<p>COMING SOON...</p>} storeImg={StoreBk3} hidden='hidden'/>
        <SignUp />
        <Footer />
    </div>
  );
};

export default Store;
