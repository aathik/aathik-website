import './SkillsStyles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import imgPython from "../Assets/python-img.png";
import imgJava from "../Assets/java-img.png";
import imgC from "../Assets/c-img.png";
import imgJavascript from "../Assets/js-img.png";
import imgCSS from "../Assets/css-img.png";
import imgHTML from "../Assets/html-img.png";
import imgWindows from "../Assets/windows-img.png";
import imgLinux from "../Assets/linux-img.png";
import imgSQL from "../Assets/sql-img.png";
import imgFire from "../Assets/firebase-img.png";
import imgXampp from "../Assets/xampp-img.png";
import imgAndroid from "../Assets/android-img.png";
import imgSAP from "../Assets/sap-img.png";


import React from 'react'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h1 className='head'>Skills</h1>
        <div className='skills-container'>
            <h3>Programming Languages</h3>
            <div className='languages'>
                <div className='python'>
                    <img src={imgPython} alt='python'></img>
                    <h4>Python</h4>
                </div>
                <div className='java'>
                    <img src={imgJava} alt='java'></img>
                    <h4>Java</h4>
                </div>
                <div className='c'>
                    <img src={imgC} alt='c'></img>
                    <h4>C Programming</h4>
                </div>
                <div className='javascript'>
                    <img src={imgJavascript} alt='javascript'></img>
                    <h4>Javascript</h4>
                </div>
                <div className='html'>
                    <img src={imgHTML} alt='html'></img>
                    <h4>HTML</h4>
                </div>
                <div className='css'>
                    <img src={imgCSS} alt='css'></img>
                    <h4>CSS</h4>
                </div>
            </div>
            <h3>Operating Systems</h3>
            <div className='operating-systems'>
                <div className='windows'>
                    <img src={imgWindows} alt='windows'></img>
                    <h4>Windows</h4>
                </div>
                <div className='linux'>
                    <img src={imgLinux} alt='linux'></img>
                    <h4>Linux</h4>
                </div>
            </div>
            <h3>Database Management</h3>
            <div className='database'>
                <div className='sql'>
                    <img src={imgSQL} alt='sql'></img>
                    <h4>MySQL</h4>
                </div>
                <div className='firebase'>
                    <img src={imgFire} alt='firebase'></img>
                    <h4>Firebase</h4>
                </div>
                <div className='xampp'>
                    <img src={imgXampp} alt='xampp'></img>
                    <h4>XAMPP</h4>
                </div>
            </div>
            <h3>Tools</h3>
            <div className='tools'>
                <div className='android'>
                    <img src={imgAndroid} alt='android'></img>
                    <h4>Android Studio</h4>
                </div>
                <div className='SAP'>
                    <img src={imgSAP} alt='SAP'></img>
                    <h4>SAP</h4>
                </div>
            </div>
            <h3>Soft Skills</h3>
            <div className='soft-skills'>
                    <div className='leadership'>
                        <CircularProgressbar value={80} text={`Leadership`} strokeWidth={8} background/>
                    </div>
                    <div className='motivation'>
                        <CircularProgressbar value={88} text={`Motivation`} strokeWidth={8} background/>
                    </div>
                    <div className='hard-working'>
                        <CircularProgressbar value={85} text={`Hard Working`} strokeWidth={8} background/>
                    </div>
                    <div className='fast-learner'>
                        <CircularProgressbar value={90} text={`Fast Learner`} strokeWidth={8} background/>
                    </div>
                    <div className='communication'>
                        <CircularProgressbar value={80} text={`Communication`} strokeWidth={8} background/>
                    </div>
                    <div className='teamwork'>
                        <CircularProgressbar value={96} text={`Teamwork`} strokeWidth={8} background/>
                    </div>
                </div>
        </div>
       
    </div>
  )
}

export default Skills