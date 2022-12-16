import './EducationStyles.css';
import { FaUserGraduate } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";

import React from 'react'

const Education = () => {
  return (
    <div className='education' id='education'>
        <h1 className='head'>Education</h1>
        <div className='education-container'>
            <div className='masters'>
                <h4><span><GrInProgress size={17}/></span> University of Windsor<span className='date'>[ Jan/2022 - ]</span></h4>
                <p>Master of Applied Computing </p>
                <p></p>
                <p><span className='bold'>Address:</span> Windsor, Ontario, Canada PIN: N9B 3P4 </p>
            </div>
            <div className='college'>
                <h4><span><FaUserGraduate size={17}/></span> Mar Athanasius College of Engineering<span className='date'>[ Aug/2016 – Jul/2020 ]</span></h4>
                <p>APJ Abdul Kalam Technological University</p>
                <p>Bachelor of Technology in Computer Science and Engineering (Honours)</p>
                <p><span className='bold'>Address:</span> Kothamangalam, Kerala, India PIN: 686666 </p>
                <p><span className='bold'>CGPA:</span> 8.32</p>
            </div>
            <div className='school'>
                <h4><span><FaUserGraduate size={17}/></span> C.K.M.N.S.S. Senior Secondary School<span className='date'>[ Jun/2014 – Mar/2016 ]</span></h4>
                <p>Central Board of Secondary Education</p>
                <p>Higher Secondary Education </p>
                <p><span className='bold'>Address:</span> Chalakudy, Kerala, India PIN: 680307 </p>
                <p><span className='bold'>Percentage:</span> 93.2%</p>
            </div>
            <div className='school2'>
                <h4><span><FaUserGraduate size={17}/></span> C.K.M.N.S.S. Senior Secondary School<span className='date'>[ Jun/2013 – Mar/2014 ]</span></h4>
                <p>Central Board of Secondary Education</p>
                <p>Secondary Education</p>
                <p><span className='bold'>Address:</span> Chalakudy, Kerala, India PIN: 680307 </p>
                <p><span className='bold'>CGPA:</span>  9.8 </p>
            </div>
        </div>
    </div>
  )
}

export default Education