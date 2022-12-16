import "./NavBarStyles.css";


import React, {useState} from 'react'
import { Link } from "react-scroll";


import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY>= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={ color ? "header header-bg" : "header"}>
        <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >
            <h1 className="Name">Aathik</h1>
        </Link>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
            </li>
            <li>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} >About</Link>
            </li>
            <li>
                <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} >Experience</Link>
            </li>
            <li>
                <Link to="education" spy={true} smooth={true} offset={-70} duration={500} >Education</Link>
            </li>
            <li>
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} >Projects</Link>
            </li>
            <li>
                <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} >Skills</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click ? (<FaTimes size={20} style={{ color: "#49c5b6" }}/>) : (<FaBars size={20} style={{ color: "#49c5b6" }}/>)
            }
            
        </div>
    </div>
  )
}

export default Navbar