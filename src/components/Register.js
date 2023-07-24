import React, { useState } from 'react';
import '../components/register.css';

export default function Register() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [reg,setReg]=useState(false);
  return (
    <>
    {!reg && 
    <>
    <div className="register">
      <div className='register-container'>
        <h1>Register</h1>
        <div className="register-form">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              localStorage.setItem("username", username);
              localStorage.setItem("password", password);
              console.log({ username, password });
              setReg(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
     
    </div>
      
    </>
    }
    {reg && 
    <>
    <div className="after-register">
      <h1>Registration Successful</h1>
      <p>Account Created, Sign in to view Courses.</p>
    </div>
    </>
    }
    </>
  )
}
