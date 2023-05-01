import { useState } from "react";
import { Carousel, CarouselItem, Modal } from "react-bootstrap";
import { ProjectsData } from "../Projects/Projects";

const Image = ({ filteredService, Data, imgWidth, imgHeight }) => {
  const [show, setShow] = useState(false);
  const CloseImage = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="images d-flex gap-3 image pb-4">
      <>
        {filteredService > 0 &&
          filteredService?.map((img, index) => (
            <div className="half-image w-50 my-4 py-3" key={index}>
              <img
                src={img.img.slice(0, 1)}
                alt=""
                width={imgWidth}
                height={imgHeight}
                style={{
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  borderRadius: "15px",
                }}
                onClick={() => handleShow()}
              />
            </div>
          ))}
        <Modal show={show} dialogClassName="gallery-modal">
          <Modal.Header closeButton onHide={CloseImage}></Modal.Header>
          <Carousel>
            {filteredService > 0 &&
              filteredService?.map((item, index) => (
                <CarouselItem key={index}>
                  <img
                    src={item.img.slice(2)}
                    alt=""
                    width={imgWidth}
                    height={imgHeight}
                    style={{
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                      borderRadius: "15px",
                    }}
                    onClick={() => handleShow()}
                  />
                </CarouselItem>
              ))}
          </Carousel>
        </Modal>
      </>
    </div>
  );
};

export default Image;
