import './AboutStyles.css';
import aboutImg from '../Assets/abImg.jpg';


import React from 'react'

const About = () => {
  return (
    <div className='About' id='about'>
        
        <div className='about-container'>
            <div className='left'>
                <h1>Aathik Thayyil Radhakrishnan</h1>
                <p>I'm an enthusiastic Computer Science Engineer and a passionate Web Developer in the making. 
                    Always eager to learn new things and looking forward for opportunities to showcase my skills to the world!
                </p>
                <div className="abt-btns">
                    <a href='https://drive.google.com/file/d/1LmtX7lkkYpOlTCPD_uwe8LLUTvgFLeKe/view?usp=sharing' className="btn" rel='noreferrer' target='_blank'>My Resume</a>
                </div>
            </div>
            <div className='right'>
                <img src={aboutImg} alt='' className='abt-img'/>
            </div>
        </div>
    </div>
  )
}

export default About