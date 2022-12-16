import "./FooterStyles.css";
import { FaLinkedin, FaMailBulk, FaCopyright} from "react-icons/fa";

import React from 'react';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="email">
                    <h4><FaMailBulk size={20} style={{
                        color:"white", marginRight:"2rem"
                    }}/>aathiktr@gmail.com</h4>
                </div>
                <div className="email">
                    <a target='_blank' href="https://www.linkedin.com/in/aathiktr/" ><FaLinkedin size={20} style={{
                        color:"white", marginRight:"2rem"
                    }}/>aathiktr</a>
                </div>
            </div>
            <div className="right">
                <h3>Navigation</h3>
                <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >About</Link>
                <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} >Experience</Link>
                <Link to="education" spy={true} smooth={true} offset={-70} duration={500} >Education</Link>
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} >Projects</Link>
                <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link>
            </div>
        </div>
        <div className="line">
            <div className="space"></div>
            <hr className="white-line"></hr>
        </div>
        <div className="copyright">
            <p><FaCopyright size={20} style={{color:"white", marginRight:"10px"}}/>Copyrights by <span><a href='https://github.com/aathik' target='_blank'>https://github.com/aathik</a></span></p>
        </div>
    </div>
  )
}

export default Footer