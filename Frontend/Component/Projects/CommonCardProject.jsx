import Image from "@/Component/Common/Image";
import LineName from "@/Component/Common/lineName";
import { ProjectsData } from "@/Component/Projects/Projects";
import { useState } from "react";
import { Carousel, CarouselItem, Modal } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const CommonCareProject = ({ area,heading,desc,filterId,client,category,list,projectInclusion}) => {
console.log(list);
  return (
    <div
      className="project-1 container-fluid w-100 p-0"
      style={{ marginTop: "-5rem" }}
    >
      <div className="w-100">
        <Carousel>
          {project[0].image.map((images, index) => (
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={images}
                alt="project1-slides"
                height={760}
                key={index}
                style={{filter:"brightness(0.8)"}}
            />
          </Carousel.Item>
          ))
          }
        </Carousel>
        <div className="container-fluid w-100" style={{background:"#1111",marginTop:"-3rem",paddingBottom:"6rem"}}>
        <div className="container mt-5" >
          <div className="line-heading d-flex flex-column gap-4" style={{padding:"1.5rem 7rem"}}>
                          <LineName item={ area} />
                          <h2>{heading} </h2>
          </div>
          <div className="row">
          <div className="images-section col-10 " style={{paddingInline:"7rem",lineHeight:"30px"}}>
              <small>{desc}</small> 
                {filterId.slice(0,1).map((items) => (        
                  <Image items={items} Data={ProjectsData} imgWidth={400} imgHeight={ 250} />
                 ))
      }
              <h3>What was included in the project?</h3>
                <small style={{ lineHeight: "30px" }}>
              </small>
                <div className="project-list pt-3">
                  {list?.map((item, index) => (        
                    <dl key={ index}>
                      <dt>{Object.keys(item)[0]}</dt>
                      <dd>{item[Object.keys(item)[0]]}</dd>
                    </dl> 
                  ))
                  }
                  {projectInclusion}
              </div>
          </div>
          <div className="client-category col-2 d-flex flex-column">
            <label >Client</label>
              <span className="text-muted">{client}</span>
              <hr className=""/>
            <label htmlFor="Category">Category</label>
                <span className="text-muted">{category}</span>
                <div className="btn icons d-flex gap-2 pt-3 justify-content-start">
                  <BsTwitter className="fs-4" color="orangered"/>
                  <FaFacebookF className="fs-4" color="orangered"/>
                  <FiInstagram className="fs-4" color="orangered"/>
                </div>
            </div>
            </div>
      </div>      
        </div>
        </div>
    
    </div>
  );
};

export default CommonCareProject;
