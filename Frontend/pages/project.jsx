import AboutMarvelous from '@/Component/AboutMarvelous/AboutMarvelous'
import ProjectCard from '@/Component/Projects/ProjectCard'
import { ProjectsData } from '@/Component/Projects/Projects'
import React from 'react'

const project = () => {
  const middleLength =Math.floor (ProjectsData[0].projectDesc.length / 2);
  return (
      <div className="project-section container-fluid">
          <AboutMarvelous heading="Latest Works" title="Our Projects"/>
         <div className="container">
        {ProjectsData.map((item) => (
          <ProjectCard link={item.link} id={item.id} heading={item.heading} area={item.area} projectDesc={item.projectDesc.slice(0,middleLength)} projectname={item.projectname} image={item.img[0]} to={ item.projectname}/>
        ))}
              </div>
    </div>
  )
}

export default project