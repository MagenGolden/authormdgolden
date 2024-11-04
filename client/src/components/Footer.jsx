import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {

  const footLinks = [
    {title: 'Home', url: '/'},
    {title: 'Store', url: '/store'},
    {title: 'The Rememberers', url: '/the-rememberers'},
    {title: 'About', url: '/about'},
    {title: 'Contact', url: '/contact-us'},
  ];

  const footLinks2 = [
    {title: 'Privacy Policy', url: '/privacy-policy'},
    {title: 'Terms & Conditions', url: '/terms-and-conditions'},
  ];

  return (
    <footer>
      <Link to='/'><h1 className='-mb-4'>M.D. Golden</h1></Link>
      <hr className='w-3/5 h-1 rounded bg-white border-solid border-2 inline-block justify-self-center'/>
      <div className='flex flex-col sm:flex-row justify-evenly'>
        {footLinks.map((link) => (
          <NavLink className='m-0 font-atomic text-2xl' key={link.title} to={link.url}>{link.title}</NavLink>
        ))}
      </div>
      <div className='flex flex-col sm:flex-row justify-center'>
        {footLinks2.map((link) => (
          <NavLink className='m-0 px-4 underline text-sm' key={link.title} to={link.url}>{link.title}</NavLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
