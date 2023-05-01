import AboutMarvelous from '@/Component/AboutMarvelous/AboutMarvelous'
import ProjectCard from '@/Component/Projects/ProjectCard'
import { ProjectsData } from '@/Component/Projects/Projects'
import { loaderFunc } from '@/Component/Team/Teams';
import { getAllProjects } from "@/Redux/Slice/ProjectSlice";
import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const project = () => {
  const dispatch = useDispatch();
 const { projectdata, isError,isLoading } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setLoading]);
  if (loading) {
    return loaderFunc();
  }
  return (
    <div className="project-section container-fluid">
      <AboutMarvelous heading="Latest Works" title="Our Projects" />
      <div className="container">
        { isLoading && <loaderFunc/>}
        {projectdata.map((item, index) => (
          <ProjectCard
            id={index + 1}
            data={item}
            link={item.projectName}
            heading={item.heading}
            area={item.area}
            projectDescription={item.projectDescription.slice(0, 20)}
            projectname={item.projectName}
            image={item.image[0].filePath}
            to={item.projectName}
          />
        ))}
      </div>
    </div>
  );
};

export default project