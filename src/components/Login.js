import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { signContext } from '../App';
import '../components/login.css';

export default function Login() {
    const [Username,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const {issignedin,setIssignedin}=useContext(signContext)
    const navigate=useNavigate();
    useEffect(()=>{
      console.log(issignedin);
    },[issignedin])
  return (
    <>
      <div className="login">
        <div className='login-container'>
          <h1>Login</h1>
          <div className="login-form">
        <input
          type="text"
          value={Username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const User=localStorage.getItem("username");
            const pass=localStorage.getItem("password");
            if(User!==Username || Password!==pass)
            {
              alert('Wrong Credentials');
              return;
            }
            console.log({User,pass});
            console.log({ Username, Password });
            setIssignedin(true);
            console.log({issignedin});
            navigate('/');
          }}
        >
          Login
        </button>
          </div>
        </div>
      </div>
      
    </>
  );
}
