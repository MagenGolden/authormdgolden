import React from 'react';
import { useState } from 'react';
import FormImg from '../../assets/scifi-girl.jpg';

const Form = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');


  return (
    <main>
      <div id='contact' className='w-full flex flex-wrap-reverse items-center justify-evenly'>
        <form className='w-[450px] flex flex-col items-center m-0'>
          <input className='w-1/4 border-2 border-blue rounded-lg mb-3' type='text' placeholder='Name' value={name} onChange={ (e) => setName(e.target.value) } />
          <input className='w-2/5 border-2 border-blue rounded-lg mb-3' type='email' placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value) } />
          <textarea className='w-3/4 border-2 border-blue rounded-lg mb-3' placeholder='Message' value={message} rows="8" onChange={ (e) => setMessage(e.target.value) } />
          <button className='w-20 font-atomic bg-blue p-2 rounded-xl transition-transform hover:scale-110'>SEND</button>
        </form>
        <img className='w-[350px] m-8 rounded-3xl transition-transform hover:scale-110' src={FormImg} alt="" />
      </div>
    </main>
  );
};

export default Form;
