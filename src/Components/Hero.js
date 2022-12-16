import './HeroStyles.css';
import Typed from 'react-typed';
import HeroImg from '../Assets/Img.jpg';
import Me from '../Assets/Me3.PNG';

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

import React from 'react';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className="mask">
          <img className="hero-img" src={HeroImg} alt='intro'></img>
        </div>
        <div className='my-pic'>
          <img className='avatar' src={Me} alt='me'></img>
        </div>
        <div className='content'>
            <h1>Hi, I'm &nbsp;
              <span className='typed'>
              <Typed
                strings={[
                      "Aathik T R", 
                    ]}
                    typeSpeed={50}
                    backSpeed={100}
                    loop
                />
              </span>
            </h1>
            <p>Computer Science Engineer ⚙✈💻</p>
            <p>Developer 👨‍💻</p>
            <p>SAP Basis Administrator 🚀</p>
            <p>And much more ....</p>
            <div className='down-arrow'>
              <Link to="about" spy={true} smooth={true} offset={-75} duration={500} >
                <IoIosArrowDown size={20} style={{ color: "white" }} />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero