import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Forgetpass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/forgot-password', {
        email: email,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending password reset link.');
    }
  };

  return (
    <div className='Forgetpass-container'>
      <div className='forget-password'>
        <h1>Welcome to ForgetPassword</h1>
        <div className='input-fields-forget'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter Your Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='for-get-button'>
            <button onClick={handleSubmit}>Submit</button>
            <Link to='/login'>
              <button>Back</button>
            </Link>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Forgetpass;
