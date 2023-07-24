import React, { useContext } from 'react'
import { Link } from 'react-router-dom'; 
import {signContext} from '../App';
import '../components/header.css';

export default function Header() {
  const {issignedin,setIssignedin}=useContext(signContext)
  return (
    <>
      <div className="header">
        <Link to="/" className='brand'>Jeet Classes</Link>
        <nav>
          <Link to="/courses" className='link'>Courses</Link>
          {!issignedin && <Link to="/login" className='link'>Login</Link>}
          {issignedin && <Link to="/" onClick={ ()=>{
            setIssignedin(false)
            }} className='link'>Logout</Link>}
          {!issignedin && <Link to='/register' className='link'>Register</Link>}
        </nav>
      </div>
    </>
  );
}
