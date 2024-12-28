import React from 'react';
import { useEffect } from 'react';
import HomeCat from '../../assets/bass.jpeg';

const HomeAuthor = () => {

  return (
    <section>
      <h1>MEET THE AUTHOR</h1>
      <div className='w-full py-10 bg-gray-800 flex flex-wrap items-center'>
        <div className='w-[525px] flex-row'>
          <h2 className='text-orange text-5xl'>M.D. GOLDEN</h2>
          <p className='mt-5 px-2 leading-loose'>I write stories about people overcoming the odds stacked against them to provide courage to those who need strength to carry on. I was once a young kid who used to read alone in my room to escape the cold world. Now I provide worlds for kids to escape to. </p>
          <button onClick={()=> (location.href='/about')} className='bg-blue mt-4 font-atomic p-2 rounded-xl transition-transform hover:scale-110' >LEARN MORE</button>
        </div>
        <img className='w-[420px] object-cover p-2' src={HomeCat} alt="" />
      </div>
    </section>
  );
};

export default HomeAuthor;
