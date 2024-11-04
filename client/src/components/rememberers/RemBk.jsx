import React from 'react';
import RemBk1 from '../../assets/The-Rememberers_V2.jpg';
import RemBk2 from '../../assets/The-Rebellion_V2.jpg';
import RemBk3 from '../../assets/invasion.jpg';

const RemBk = () => {

  const books = [
    { img: `${RemBk1}`, title: 'THE REMEMBERERS', sub: 'Book 1 of 4', text: 'Follow Matt as he discovers the truth about the world he lives in.', url: 'https://www.amazon.com/gp/product/B07NY44YKM?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=1708229546&sr=8-1'},
    { img: `${RemBk2}`, title: 'THE REBELLION', sub: 'Book 2 of 4', text: 'Discover what happened to Matt’s father after he disappeared.', url: 'https://www.amazon.com/gp/product/B09G21YKL7?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&qid=1708229546&sr=8-1'},
    { img: `${RemBk3}`, title: 'THE INVASION', sub: 'Book 3 of 4', hidden: 'hidden',},
  ];


  return (
    <section className='w-full mt-20 flex flex-wrap items-start justify-evenly'>
      {books.map((book) => (
        <div className='w-80 mt-10' key={book.title}>
          <img className={`w-52 ${book.margin}`} src={book.img} alt="" />
          <h1 className='text-2xl'>{book.title}</h1>
          <p className='text-blue text-sm'>{book.sub}</p>
          <p className='text-sm px-14 mt-4'>{book.text}</p>
          <button className={`mt-4 bg-blue font-atomic p-2 rounded-xl transition-transform hover:scale-110 ${book.hidden}`} onClick={() => window.open(`${book.url}`)} >CLICK HERE</button>
        </div>
      ))}
    </section>
  );
};

export default RemBk;
