import React from 'react';
import { useState } from 'react';
import FormImg from '../../assets/scifi-girl.jpg';
import api from '../api.js';

const Form = () => {

  const [sending, setSending] = useState(false);
  const buttonText = sending ? 'Sending' : 'Submit';

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [b0Spm, setB0Spm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      const requiredInputs = document.querySelectorAll('[required]');
      const requiredFields = Array.from(requiredInputs);
      const emptyFields = requiredFields.filter(item => (!item.value && item.required && item.id));
      const contactInfo = {name, email, message};
      if ((emptyFields.length === 0) && (!b0Spm)) {
      try {
        setSending(true);
        const response = await api.post('/contact', contactInfo);
        if (response.data.status === 'success') {
          alert(
            'Great! Your application has been sent. We will get back to you as soon as possible!'
          );
          setSending(false);
          setName('');
          setEmail("");
          setMessage('');
        } else {
          alert('Opps. Something went wrong. Please try again later.')
        }
      } catch (err) {
        console.log(err);
      }
        } else {
          alert('Please fill out all fields!')
        }
    };



  return (
    <main>
      <div id='contact' className='w-full flex flex-wrap-reverse items-center justify-evenly'>
        <form className='w-[450px] flex flex-col items-center m-0'>
          <input type='text' placeholder='title' value={b0Spm} onChange={ (e) => setB0Spm(e.target.value) } style={{display: 'none'}}/>
          <input id='name' className='w-1/4 border-2 border-blue rounded-lg mb-3' type='text' placeholder='Name' value={name} onChange={ (e) => setName(e.target.value) } required />
          <input id='email' className='w-2/5 border-2 border-blue rounded-lg mb-3' type='email' placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value) } required />
          <textarea id='message' className='w-3/4 border-2 border-blue rounded-lg mb-3' placeholder='Message' value={message} rows="8" onChange={ (e) => setMessage(e.target.value) } required/>
          <button className='w-20 font-atomic bg-blue p-2 rounded-xl transition-transform hover:scale-110' onClick={handleSubmit}>{buttonText}</button>
        </form>
        <img className='w-[350px] m-8 rounded-3xl transition-transform hover:scale-110' src={FormImg} alt="" />
      </div>
    </main>
  );
};

export default Form;
