import React from 'react';
import PropTypes from 'prop-types';

const StoreBook = ({ direction, hidden, storeImg, storeTitle, storeSub, storeText, bkUrl }) => {

  return (
    <section id='store' className={`flex items-center mt-52 ${direction}`}>
      <div className='w-1/2 pl-10 pr-20'>
        <h1 className='text-blue text-5xl text-left'>{storeTitle}</h1>
        <p className='text-left py-3'>{storeSub}</p>
        {storeText}
         <button className={`font-atomic bg-blue mt-10 p-2 rounded-xl transition-transfrom hover:scale-110 ${hidden}`} onClick={() => window.open(`${bkUrl}`)} >BUY ON AMAZON</button>
      </div>
      <img className='w-1/2' src={storeImg} alt="" />
    </section>
  );
};

StoreBook.propTypes = {
  storeImg: PropTypes.object.isRequired,
  storeTitle: PropTypes.string.isRequired,
  storeSub: PropTypes.string.isRequired,
  storeText: PropTypes.object.isRequired,
  bkUrl: PropTypes.object.isRequired,
  direction: PropTypes.string,
  hidden: PropTypes.string,
};


export default StoreBook;
