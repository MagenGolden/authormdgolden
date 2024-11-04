import React from 'react';
import PropTypes from 'prop-types';

const StoreBook = ({ margin, direction, hidden, storeImg, storeTitle, storeSub, storeText, bkUrl }) => {

  return (
    <section id='store' className={`flex flex-wrap-reverse items-center ${margin} ${direction}`}>
      <div className='w-[530px]'>
        <h1 className='text-blue text-5xl text-left'>{storeTitle}</h1>
        <p>{storeSub}</p>
        {storeText}
         <button className={`font-atomic bg-blue p-2 mt-10 rounded-xl transition-transfrom hover:scale-110 ${hidden}`} onClick={() => window.open(`${bkUrl}`)} >BUY ON AMAZON</button>
      </div>
      <img className='w-[530px]' src={storeImg} alt="" />
    </section>
  );
};

StoreBook.propTypes = {
  storeImg: PropTypes.string.isRequired,
  storeTitle: PropTypes.string.isRequired,
  storeSub: PropTypes.string.isRequired,
  storeText: PropTypes.object.isRequired,
  bkUrl: PropTypes.string,
  direction: PropTypes.string,
  hidden: PropTypes.string,
  margin: PropTypes.string,
};


export default StoreBook;
