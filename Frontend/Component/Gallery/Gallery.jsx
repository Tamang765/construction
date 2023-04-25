import React, { useState } from "react";
import AboutMarvelous from "../AboutMarvelous/AboutMarvelous";
import { ProjectsData } from "../Projects/Projects";
import { Carousel, CarouselItem, Modal } from "react-bootstrap";
const Gallery = () => {
  const length = ProjectsData.length;
  const [show, setShow] = React.useState(false);

  const [open, setOpen] = useState();
  const handleShow = (num) => {
    setShow(true);
    setOpen(num);
  };
  console.log(open);
  const handleClose = () => setShow(false);
  return (
    <div className="gallery">
      <AboutMarvelous heading="Project Images" title="Image gallery" />
      <div className="container my-5 py-5">
        <div className="projects-image d-flex justify-content-between flex-wrap gap-3">
          {ProjectsData.slice(0, 2).map((item, index) => (
            <>
              <>
                <div className="img-holder position-relative">
                  <img
                    src={item.img[0]}
                    alt=""
                    width={640}
                    height={400}
                    className="img-holder "
                  />
                  <span
                    className="project-hover position-absolute  top-50 start-50 translate-middle  align-items-center justify-content-center d-flex "
                    onClick={() => handleShow(item.id)}
                  >
                    {item.projectname}
                  </span>
                </div>
              </>
              {open === item.id && (
                <Modal show={show} dialogClassName="gallery-modal">
                  <Modal.Header closeButton onHide={handleClose}></Modal.Header>
                  <Carousel>
                    {ProjectsData.filter((project) => {
                      if (project.id === open) {
                        return project;
                      } else {
                        return null;
                      }
                    }).map((images) =>
                      images.img.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="">
                            <img src={img} width={1100} height={700} alt="" />
                          </div>
                        </CarouselItem>
                      ))
                    )}
                  </Carousel>
                </Modal>
              )}
            </>
          ))}
          {ProjectsData.slice(2, length).map((item) => (
            <>
              <div className="img-holder position-relative">
                <img src={item.img[0]} alt="" width={420} height={350} />
                <span
                  className="project-hover position-absolute  top-50 start-50 translate-middle  align-items-center justify-content-center d-flex "
                  onClick={() => handleShow(item.id)}
                >
                  {item.projectname}
                </span>
              </div>
              {open === item.id && (
                <Modal show={show} dialogClassName="gallery-modal">
                  <Modal.Header closeButton onHide={handleClose}></Modal.Header>
                  <Carousel>
                    {ProjectsData.filter((project) => {
                      if (project.id === open) {
                        return project;
                      } else {
                        return null;
                      }
                    }).map((images) =>
                      images.img.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="">
                            <img src={img} width={1100} height={700} alt="" />
                          </div>
                        </CarouselItem>
                      ))
                    )}
                  </Carousel>
                </Modal>
              )}
            </>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Gallery;
