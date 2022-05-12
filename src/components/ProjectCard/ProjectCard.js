import React from 'react'
import "../ProjectCard/Projectcard.css"

const ProjectCard = ({projectobj}) => {
    return (
      <div>
      <div class="cards">
     <div class="card">
    <img className='card-img' src={projectobj.photo}  alt={projectobj.title}/>  
    <div className=' card-desc'>  <h2 class="title">{projectobj.title}</h2>
    <a href={projectobj.poster}> <button className='btn'>View Project</button></a></div>
  
  </div>
      </div>
      </div>

 
    )
}

export default ProjectCard;
