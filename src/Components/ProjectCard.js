import './ProjectCardStyles.css';

import React from 'react'


const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="proj"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <div className='pro-text'>
              <p>{props.text}</p>
            </div>
            <div className="pro-btns">
                <a  class="btn" href={props.view} rel='noreferrer' target='_blank'>SOURCE</a>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard