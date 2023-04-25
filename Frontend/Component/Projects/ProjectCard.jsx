import Link from "next/link";
import React, { Children } from "react";
const ProjectCard = ({ id, heading, area, projectDesc, projectname, link, redirect, image,Children }) => {
  return (
    <div className="project  d-flex  position-relative second-card">
      {id === "2" || id=== "4" ? (
        <div className="left d-flex flex-row-reverse">
              <img
            src={image}
            alt=""
            width={800}
            height={510}
            style={{}}
          />
          <div
            className="project-details d-flex flex-column "
            style={{ left: "64px", zIndex: "1" }}
          >
            <h2>{heading}</h2>
            <span>{area}</span>
            <small>{projectDesc}</small>
            { Children}
            <hr />
            <span className="line second-line"></span>
            <div className="project-title d-flex justify-content-between">
              <span className="title">{projectname}</span>
              <div className="btn">
              <Link href={`project/${link}`}><strong>Discover</strong></Link>
              </div>
            </div>
          </div>
      
        </div>
      ) : (
        <>
          <img src={image} alt="" width={800} height={510} />
          <div className="project-details d-flex flex-column">
            <h2>{heading}</h2>
            <span>{area}</span>
            <small>{projectDesc}</small>
            <hr />
            <span className="line"></span>
            <div className="project-title d-flex justify-content-between">
              <span className="title">{projectname}</span>
                  { redirect}
              <div className="btn">
                  <Link href={`project/${link}`}><strong>Discover</strong></Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
