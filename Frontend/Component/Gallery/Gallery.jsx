
import { getAllProjects } from "@/Redux/Slice/ProjectSlice";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, Carousel, CarouselItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AboutMarvelous from "../AboutMarvelous/AboutMarvelous";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const dispatch = useDispatch();
  const {projectdata,isError} =useSelector((state)=>state.project);
  useEffect(() => {
    dispatch(getAllProjects());
  },[dispatch])
  const handleClose = () => setShow(false);

  const handleShow = (index) => {
    setSelectedProjectIndex(index);
    setShow(true);
  };

  const selectedProjectImages = selectedProjectIndex !== null
    ? projectdata[selectedProjectIndex].image
    : [];

  return (
    <div className="gallery-holder">
      <AboutMarvelous heading="Project Images" title="Image gallery" />
      <div className="container my-5 py-5">
        <div className="projects-image d-flex justify-content-between flex-wrap gap-3">
        {projectdata.map((project, index) => (
          <div key={index} className="img-holder position-relative">
            <img
              src={project.image[0].filePath}
              alt=""
              width={640}
              height={400}
              className="img-holder"
            style={{borderRadius:"20px"}}
            />
            <span className="project-hover position-absolute top-50 start-50 translate-middle align-items-center justify-content-center d-flex"       onClick={() => handleShow(index)}>
              {project.projectName}
            </span>
          </div>
        ))}

<Modal show={show} dialogClassName="gallery-modal" >
        <Modal.Header onHide={handleClose} closeButton>
          <Modal.Title>{projectdata[selectedProjectIndex]?.projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {selectedProjectImages.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image.filePath} alt={image.fileName} width={1100} height={650}/>
              </CarouselItem>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>

        </div>
      </div> 
    </div>
  );
};

export default Gallery;
