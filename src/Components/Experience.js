import './ExperienceStyles.css';
import expImg from '../Assets/exp.png';
import { MdWork } from "react-icons/md";

import React from 'react'

const Experience = () => {
  return (
    <div className='experience' id='Experience'>
        
        <h1 className='head'>Experience </h1>

        <div className='experience-container'>
            <div className='left'>
                <img src={expImg} alt='exp' className='exp-img'/>
            </div>
            <div className='right'>
                <h3><span><MdWork size={15}/></span> Associate<span className='date'>[ 05/Sep/2022 - 28/Oct/2023]</span></h3>
                <h4>Cognizant Technology Solutions India Private Limited</h4>
                <p><span className='bold'>Address:</span> Chennai, India PIN: 600119</p>
                <p><span className='bold'>Job Role:</span> SAP Basis Administrator</p>
                <p><span className='bold'>Project:</span> Animal Health and Science Project for Merck Group</p>
                <p><span className='bold'>Key Responsibilities:</span></p>
                <ul>
                    <li>Handled system administration and support of technical architecture, including Basis support of SAP NETWEAVER and BW platforms, with the goal of providing excellent system reliability, performance, high availability, and overall optimized systems</li>
                    <li>Performed daily system monitoring activities</li>
                    <li>Created and scheduled background jobs in SAP systems</li>
                    <li>Create Background jobs and Job Scheduling Monitor</li>
                    <li>Resolving tickets that are created by end-users and giving support on priority</li>
                    <li>Created memos and provided support in system upgrades and releases</li>
                    <li>Scheduled and Executed SAP Transports</li>
                    <li>Experienced with SAP CHARM and Solution Manager on handling Transports</li>
                    <li>Creation and maintenance of printers</li>
                </ul>
            </div>
            
        </div>

    </div>
  )
}

export default Experience