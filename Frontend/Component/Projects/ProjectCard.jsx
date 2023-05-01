import Link from "next/link";
import React, { Children } from "react";
const ProjectCard = ({
  id,
  heading,
  area,
  projectDescription,
  projectName,
  link,
  redirect,
  image,
  Children,
  item,
  data,
}

) => {
  return (
    <div className="project  d-flex  position-relative second-card">
      <div className="left d-flex w-100">
        <img src={image} alt="" width={800} height={510} />
        <div
          className="project-details d-flex flex-column "
          style={{ left: "64px", zIndex: "1" }}
        >
          <h2>{heading}</h2>
          <span>{area}</span>
          <small>{projectDescription}</small>
          {Children}
          <hr />
          <span className="line second-line"></span>
          <div className="project-title d-flex justify-content-between">
            <span className="title">{projectName}</span>
              <Link href={`project/${data.slug}`}>View Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
