import AboutMarvelous from '@/Component/AboutMarvelous/AboutMarvelous'
import ProjectCard from '@/Component/Projects/ProjectCard'
import { ProjectsData } from '@/Component/Projects/Projects'
import React from 'react'

const project = () => {
  const middleLength =Math.floor(ProjectsData[0].projectDescription.length / 2);
  return (
      <div className="project-section container-fluid">
          <AboutMarvelous heading="Latest Works" title="Our Projects"/>
         <div className="container">
        {ProjectsData.map((item) => (
          <ProjectCard link={item.projectName} id={item.id} heading={item.heading} area={item.area} projectDescription={item.projectDescription.slice(0,middleLength)} projectname={item.projectName} image={item.img[0]} to={ item.projectName}/>
        ))}
              </div>
    </div>
  )
}

export default project