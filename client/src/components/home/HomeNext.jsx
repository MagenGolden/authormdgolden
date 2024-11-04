import React from 'react';
import NextBk2 from '../../assets/book2.png'

const HomeNext = () => {

  return (
    <section className='flex flex-wrap items-center mt-20'>
      <img className='w-[600px]' src={NextBk2} alt="" />
      <div className='flex-row w-[600px]'>
        <p className='center:text-left text-3xl pb-1'>THE REBELLION</p>
        <p className='center:text-left pb-4'>WOULD YOU GIVE UP EVERYTHING FOR FREEDOM?</p>
        <p className='center:text-left text-sm center:pr-40 pb-10 leading-relaxed'>Ed’s neighbors start going missing, but no one else seems to notice. When the house next to his goes under construction and his best friend doesn’t remember the family that lived there before, Ed decides to find the culprit for his friend’s sudden amnesia.
          <br /> <br />
          The radio is brainwashing people into forgetting their loved ones, and those who remember are in danger. Ed must risk it all to save his friends and family. He enlist the help of his best friend and devises a plan to save those that are being targeted.
          <br /> <br />
          The two friends are feeling good about the people they save, but what are they to do next? Why are people being taken? What is it that the Heads are trying to hide? Who will be taken next? Is there a way out?
          <br /> <br />
          Ed escapes to a new world, but needs to find a way to bring his friends and family with him. He must navigate himself through an unknown land, fight dangers he had never encountered before, and save the world from an all too familiar threat. Will he be successful? Will he live to see his son again?</p>
          <button onClick={()=> window.open('https://www.amazon.com/Rebellion-Rememberers-M-D-Golden-ebook/dp/B09G21YKL7?ref_=ast_author_mpb', '_blank', 'noreferrer')} className='font-atomic bg-green p-2 rounded-xl transition-transform hover:scale-110'>BUY NOW</button>
      </div>
    </section>
  );
};

export default HomeNext;
