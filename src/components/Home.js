import React from 'react';
import '../components/home.css';
import home from '../assets/home.jpg';

export default function Home() {
  return (
    <>
      <section className='home-section'>
        <div className='home-content'>
          <h1>Welcome to Jeet Classes</h1>
          <p>Free and Affordable Education for all!!</p>
        </div>
        <img src={home} alt="Students" />
      </section>

      <section className="about-section">
        <div className='container'>
          <div className='box'>
            <h3>Our Initiatives</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem natus aliquam quae omnis ratione facilis harum earum libero illum.</p>
          </div>

          <div className='box'>
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem natus aliquam quae omnis ratione facilis harum earum libero illum.</p>
          </div>

          <div className='box'>
            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem natus aliquam quae omnis ratione facilis harum earum libero illum.</p>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <p><span>40K</span> <br /> Dollars Raised</p>
        <p><span>8K</span> <br /> Graduate Students</p>
        <p><span>120</span> <br /> Partner Institutions</p>
      </section>
    </>
    
    
  )
}
