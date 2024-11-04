import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Navbar = () => {

const [scroll, setScroll] = useState(false);
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 100 ?
                    setScroll(true) : setScroll(false);
  })
});

const [signUp, setSignUp] = useState(false);
useEffect(() =>{
  let form = document.getElementById('signUp');
  if (form !== null) {
    setSignUp(true);
  }
},[]);

const [click, setClick] = useState(false)
function menuClick() {
  setClick(!click);
}

const navLinks = [
  {title: 'Home', url: '/'},
  {title: 'Store', url: '/store'},
  {title: 'The Rememberers', url: '/the-rememberers'},
  {title: 'About', url: '/about'},
  {title: 'Contact', url: '/contact-us'},
];

  return (
    <div className='relative z-40'>
      <div className='fixed w-full lg:hidden z-50' onClick={menuClick}>{click ? (<FaXmark size={30} />) : (<FaAlignJustify size={30} />)}</div>
        <nav className={`fixed w-full items-center justify-between lg:mt-6 lg:p-0 lg:bg-transparent xl:px-32 lg:flex bg-black bg-opacity-70 pb-6 -mt-2 ${ click ? ' ' : 'hidden' }`}>
          <img onClick={() =>  location.href='/' } className='w-44 cursor-pointer m-0 pb-4 pt-4 lg:pt-0 lg:pb-0'  src={ logo } alt="MD Golden" />
          <ul className={`w-content lg:flex lg:items-center lg:justify-center ${ scroll && !click ? 'bg-black rounded-lg bg-opacity-70' : ' '}`}>
            {navLinks.map((link) => (
              <li className='mb-2 lg:m-0' key={link.title}><NavLink className="p-1 hover:text-green hover:border-2 hover:border-green font-geo text-3xl" to={link.url}>{link.title}</NavLink></li>
            ))}
          </ul>
          <button onClick={signUp ? () => location.href='#signUp' : () => location='/#signUp'} className='w-52 p-2 rounded-xl bg-blue font-atomic transition-transform hover:scale-90'>Join The Fight</button>
        </nav>
    </div>
  );
};

export default Navbar;
