import React from 'react';
import { Link } from 'react-router-dom';
import ScifiCity from '../../assets/world-fire.jpg';
import HomeBk1 from '../../assets/book1.png';
import HomeBk2 from '../../assets/book2.png';
import HomeBk3 from '../../assets/book3.png';

const HomeBook = () => {
  <Link to=''></Link>

  return (
    <main className='mt-64'>
      <h2 className='text-blue text-2xl'>SERIES</h2>
      <h1 className='text-green text-7xl'>THE REMEMBERERS</h1>
      <p className='px-64'>Matt had always felt there was something a little off about the town he lives in, but he never would have guessed the truth. When his dad and all the rest of the men suddenly go missing, he begins to wonder what is really happening. Follow along as Matt discovers the truth about the world he lives in and what he has to do in order to save those he cares most about. </p>
      <div className='bg-gradient-to-b from-black via-transparent to-transparent -mt-16'>
        <img className='relative -z-10 w-full object-cover' src={ScifiCity} alt="" />
      </div>
      <div className='flex items-center justify-evenly -mt-[500px]'>
        <Link className='w-1/3' to='https://www.amazon.com/gp/product/B07NY44YKM?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=1708284460&sr=8-1' target='_blank' ><img src={HomeBk1} alt="" /></Link><Link className='w-1/3' to='https://www.amazon.com/gp/product/B09G21YKL7?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&qid=1708284460&sr=8-1' target='_blank'><img src={HomeBk2} alt="" /></Link><img className='w-1/3' src={HomeBk3} alt="" />
      </div>
      <button onClick={()=> (location.href='/the-rememberers')} className='font-atomic bg-blue p-2 rounded-xl transition-transform hover:scale-110'>VIEW SERIES</button>
    </main>
  );
};

export default HomeBook;
