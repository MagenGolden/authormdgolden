import React from 'react';
import PropTypes from 'prop-types';

const Header = ({image, title, sub, color, box}) => {

  return (
    <header>
      <div className='bg-gradient-to-t from-black via-transparent to-transparent'>
        <img className='relative -z-10 block h-[650px] sm:h-auto w-full object-cover' src={image} alt="" />
      </div>
      <div className='-mt-96 sm:-mt-80 sm:-mb-20'>
        <h1 className={`text-7xl ${color}`}>{title}</h1>
        <p className='text-green font-medium'>{sub}</p>
        {box}
      </div>
    </header>
  );
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
  color: PropTypes.string,
  box: PropTypes.object,
};

export default Header;
