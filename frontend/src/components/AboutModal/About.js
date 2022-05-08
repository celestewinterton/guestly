import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import url from '../MainContent/images/flowers-bride.jpeg';
import './About.css'

function About() {

  return (
    <div className='card about-container'>
      <div>
        <img src={url} className='about-image'></img>
      </div>
      <div className='about-text-container'>
        <h2 className='text-center'>Celeste Winterton</h2>
        <div className='about-text'>Former financial analyst, turned software developer hoping to change the world through blockchain technology.</div>
        <div className='about-text'>This app was inspired by close friends, Hannah Malone and Haider Karim. In planning their wedding, they saw this opportunity and shared the idea with me.</div>
        <h3 className='text-center'>Connect with me!</h3>
        <div className='about-links-container'>
          <a href="https://www.linkedin.com/in/celestewinterton/" target="_blank" >
            <img align="left" className='about-link' src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
          <a href="https://angel.co/celeste-winterton" target="_blank">
            <img align="left" className='about-link' src="https://img.shields.io/badge/AngelList-%23D4D4D4.svg?style=for-the-badge&logo=AngelList&logoColor=black" />
          </a>
          <a href="https://github.com/celestewinterton" target="_blank">
            <img align="left" className='about-link' src="https://img.shields.io/badge/Github-161b22?style=for-the-badge&logo=github&logoColor=white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
