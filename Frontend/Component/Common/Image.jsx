import { useState } from "react";
import { Carousel, CarouselItem, Modal } from "react-bootstrap";
import { ProjectsData } from "../Projects/Projects";

const Image = ({ items,Data,imgWidth,imgHeight}) => {
  const [show, setShow] =useState(false);

  const [open, setOpen] = useState();
  const CloseImage = () => setShow(false);
  const handleShow = (num) => {
    setShow(true);
    setOpen(num);
  };

  return (
    <div className="images d-flex gap-3 image pb-4">
   
        <>
        {
            items.img.slice(0,2).map((img, index) => (
              
              <div className="w-50 my-4 py-3"  key={index}>
              <img
                src={img}
                alt=""
                width={imgWidth}
                height={imgHeight}
                style={{
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  borderRadius: "15px",
                  }}
                  onClick={() => handleShow(items.id)}
              />
          </div>
          ))

        }
{open === items.id && (
    <Modal show={show} dialogClassName="gallery-modal">
      <Modal.Header closeButton onHide={CloseImage}></Modal.Header>
      <Carousel>
        {Data.filter((project) => {
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

    
    </div>
  );
};

export default Image;
