import './ProjectCardStyles.css';

import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';

import React from 'react'

const Projects = () => {
  return (
    <div className="project" id='projects'>
        <h1 className="head">Projects</h1>
        <div className="project-container">
            {ProjectData.map((val, ind) => {
                return(
                    <ProjectCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Projects