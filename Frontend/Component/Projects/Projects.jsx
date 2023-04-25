import { Children } from "react";
import LineName from "../Common/lineName";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Title } from "../Common/Card";

export const ProjectsData = [
  {
    id: "1",
    projectname: "Planning & Designing",
    heading: "Planning & Designing",
    area: "Balaju, Kathmandu",
    projectDesc:
      "We are proud to have designed and built several commercial buildings for our clients. One recent project we completed was a new office building for our client, XYZ Corporation. Here are some details about the project: ",
    img: [
      "/media/Projects/5.jpg",
      "/media/Projects/1.jpg",
      "/media/Projects/5.jpg",
    ],
    category: "renovation",
    client: "Ramesh",
    link: "renovation",
   Lists: {
      "list": [
        {
          "Location": "The new office building is located in the heart of downtown, providing easy access to public transportation and nearby amenities."
        },
        {
          "Design": "Our team worked closely with the client to create a modern, functional, and efficient office space that met their specific needs. The design included open-concept workspaces, private offices, meeting rooms, a cafeteria, and a fitness center"
       }
       ,
       {
         "Contruction":"The construction phase of the project was completed on time and within budget. Our team used high-quality materials techniques to ensure that the building was safe, secure, and built to last."
       }
       , {"Completion":"The project was completed on schedule and to the satisfaction of the client. They were thrilled with their new office space, which provided a modern and comfortable environment for their employees."}
      ]
    }

  },
  {
    id: "2",
    projectname: "Remodeling",
    heading: "Remodeling",
    area: "Balaju, Kathmandu",
    projectDesc:
      "We offer high-quality remodeling services that can transform your existing space into a beautiful and functional environment. Recently, we remodeled Kitchen Interior for our client Mr. MNO.",
    img: [
      "/media/Projects/5.jpg",
      "/media/Projects/1.jpg",
      "/media/Projects/6.jpg",
    ],
    category: "Remodel",
    client: "Ram",
    link: "remodeling",
  projectInclusion:"Kitchen remodeling with modern appliances, cabinets, countertops, and flooring. We worked closely with clients to understand their cooking and entertaining needs and create a space that is functional, efficient, and aesthetically pleasing."
  },
  {
    id: "3",
    projectname: "Residential properties",
    heading: "Residential properties",
    area: "Balaju, Kathmandu",
    projectDesc: "Residential building for our client MR ABC.",
    img: [
      "/media/Projects/1.jpg",
      "/media/Projects/1.jpg",
      "/media/Projects/6.jpg",
    ],
    category: "Interior",
    client: "Suresh",
    link: "",
    Lists: {
      "list": [
        {
          "Location": "The residential building is located in a desirable suburban neighborhood, close to schools, shopping, and other amenities."
        },
        {
          "Design": "Our team worked closely with the client to create a design that met their unique requirements and reflected their personal style. The design included a spacious living room, a modern kitchen with appliances, four bedrooms, and three bathrooms."
       }
       ,
       {
         "Contruction":"The construction phase of the project was completed on time and within budget. Our team used high-quality materials and superior construction techniques to ensure that the building was safe, secure, and built to last."
        }
        , {
          "Sustainability":"Our client was committed to sustainability, so we incorporated several green features into the design, including energy-efficient lighting and appliances, a rainwater collection system for irrigation, and low-flow toilets and showerheads."
        }
       , {"Completion":"The project was completed to the satisfaction of the client, who was thrilled with their new home. The finished product was a beautiful and functional space that provided a comfortable and inviting environment for their family."}
      ]
    }
  },

];
const Projects = () => {
  return (
    <section className="explore-projects">
      <div className="projects container mt-5">
        <LineName item="Latest Work" />
        <h2 className="fw-bold py-2">
          Our <Title title="Projects"/>
        </h2>
        {ProjectsData.slice(0, 3).map((item) => (
          <ProjectCard
            id={item.id}
            link={`/${item.link}`}
            heading={item.heading}
            area={item.area}
            projectDesc={item.projectDesc}
            projectname={item.projectname}
            image={item.img[0]}
          ></ProjectCard>
        ))}
        <center>
          <Link href="/project"
            className="fw-bold my-5"
            style={{
              padding: "20px",
              borderRadius: "20px",
              border: "none",
              background: "orangered",
              color: "white",
              textDecoration:"none"
            }}
          >
            View More Projects
          </Link>
        </center>
      </div>
    </section>
  );
};

export default Projects;
