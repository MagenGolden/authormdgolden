import React from 'react';
import { useState } from 'react';
import FormBg from '../assets/abandoned.jpg';
import FormBk from '../assets/book2-group.png';
import api from './api';

const SignUp = () => {

  const [sending, setSending] = useState(false);
  const buttonText = sending ? 'Sending' : 'Submit';

const [b0Spm, setB0Spm] = useState('');
const [name, setName] = useState ('');
const [email, setEmail] = useState ('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      {id:'name', value: `${name}`},
      {id:'email', value: `${email}`}
    ];
    const emptyFields = requiredFields.filter(item =>
      (!item.value));
    const userInfo = {name, email};
    if ((emptyFields.length === 0) && (!b0Spm)){
    try {
      setSending(true);
      const response = await api.post('/signup', userInfo);
      console.log(response);
      if (response.data.status === 'success') {
        alert(
          'Great! Your from has been sent! We will get back to you soon!'
        );
        setSending(false);
        setName('');
        setEmail('');
      } else {
        setSending(false);
        alert('Opps. Something went wrong. Please try again.');
      }
    } catch (err) {
      console.log(err);
    }
      } else {
        alert('please fill out all fields')
      };
  };


  return (
    <section id='signUp' className='mt-10'>
      <div className='bg-gradient-to-b from-black via-transparent to-transparent'>
        <img className='relative -z-10 tablet:h-[455px] h-[500px] w-full object-cover' src={FormBg} alt="" />
      </div>
      <div className='tablet:flex items-center -mt-[480px] tablet:-mt-[400px]'>
        <img className='w-[350px] tablet:w-1/2' src={FormBk} alt="" />
        <div className='w-[350px] tablet:w-1/2'>
          <p className='text-blue text-md'>JOIN THE FIGHT</p>
          <p className='text-green text-xl'>THE REMEMBERERS</p>
          <p className='w-4/5 m-auto text-sm font-medium'>Sign-up to get updates on when the next book on the series will be released. As an added bonus you will get the first chapter of book 2 absolutely free!</p>
          <form className='mt-2'>
            <input type='text' placeholder='title' value={b0Spm} onChange={ (e)=> setB0Spm(e.target.value) } style={{display: 'none'}} />
            <input className='border-2 border-blue text-black' type="text" placeholder='First Name' required value={name} size='10'
                   onChange={ (e) => setName(e.target.value) }/>
            <input type='text' className='border-2 border-blue' placeholder='Email' required value={email} size='15' onChange={(e)=> setEmail(e.target.value)} />
            <button className='bg-blue border-blue border-2 px-1' type='button' onClick={handleSubmit}>{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
