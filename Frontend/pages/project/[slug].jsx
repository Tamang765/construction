import Image from "@/Component/Common/Image";
import LineName from "@/Component/Common/lineName";
import NextPrev from "@/Component/Projects/NextPrev";
import { getProjectByID } from "@/Redux/Service/ProjectService";
import {
  getAllProjects,
  getProjectByIDAsync,
  setProjectById,
  setProject,
} from "@/Redux/Slice/ProjectSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
const SinglePage = () => {
  const dispatch = useDispatch();
  const filtereddata = useSelector(setProjectById);
  const [data, setData] = useState(filtereddata);
  const projectdata = useSelector(setProject);
  const [allProjects, setAllProjects] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const [imagePreview, setimagePreview] = useState();
  const [show, setShow] = useState(false);
  const CloseImage = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    dispatch(getProjectByIDAsync(slug));
    dispatch(getAllProjects());
  }, [dispatch, slug]);
  useEffect(() => {
    setData(filtereddata);
    setimagePreview(data?.image);
    setAllProjects(projectdata);
  }, [filtereddata, data, imagePreview, allProjects, projectdata]);
  const otherProjects = projectdata.filter((item) => item.slug !== slug);
  const otherSlug = otherProjects.map((item) => item.slug);
  console.log(otherSlug);
  return (
    <>
      <div
        className="project-1 container-fluid  p-0"
        style={{ marginTop: "-5rem" }}
      >
        <Carousel fade className="d-flex" style={{ zIndex: "-1" }}>
          {imagePreview?.map((image, index) => (
            <Carousel.Item>
              {imagePreview !== null ? (
                <img
                  className="d-block w-100"
                  src={`${image.filePath}`}
                  alt="First slide"
                  height={760}
                  style={{ filter: "brightness(0.8)", objectFit: "cover" }}
                />
              ) : (
                <p style={{ color: "black" }}>No Images to show</p>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="">
          <div
            className="container-fluid w-100"
            style={{
              background: "#1111",
              marginTop: "-3rem",
              paddingBottom: "6rem",
            }}
          >
            <div className="container mt-5">
              <div
                className="line-heading d-flex flex-column gap-4"
                style={{ padding: "1.5rem 7rem" }}
              >
                <LineName item="Balaju , kathmandu" />
                <h2> {data?.projectName}</h2>
              </div>
              <div className="row">
                <div
                  className="images-section col-10 "
                  style={{ paddingInline: "7rem", lineHeight: "30px" }}
                >
                  <div className="d-flex gap-3 flex-wrap">
                    {imagePreview?.map((image, index) => (
                      <img
                        src={`${image.filePath}`}
                        alt="First slide"
                        width={300}
                        height={300}
                        style={{
                          boxShadow:
                            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                          borderRadius: "15px",
                        }}
                        onClick={() => handleShow()}
                      />
                    ))}
                    <Modal show={show} dialogClassName="gallery-modal">
                      <Modal.Header
                        closeButton
                        onHide={CloseImage}
                      ></Modal.Header>
                      <Carousel>
                        {imagePreview?.map((image, index) => (
                          <Carousel.Item>
                            {imagePreview !== null ? (
                              <img
                                className="d-block w-100"
                                src={`${image.filePath}`}
                                alt="First slide"
                                height={760}
                                style={{
                                  filter: "brightness(0.8)",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <p style={{ color: "black" }}>
                                No Images to show
                              </p>
                            )}
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Modal>
                  </div>
                  <h3>What was included in the project?</h3>
                  <small style={{ lineHeight: "30px" }}>
                    {data?.projectDescription}
                  </small>
                </div>
                <div className="client-category col-2 d-flex flex-column">
                  <label>Client</label>
                  <span className="text-muted"></span>
                  <hr />
                  <div className="btn icons d-flex gap-2 pt-3 justify-content-start">
                    <BsTwitter className="fs-4" color="orangered" />
                    <FaFacebookF className="fs-4" color="orangered" />
                    <FiInstagram className="fs-4" color="orangered" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextPrev next={otherSlug} />
    </>
  );
};

export default SinglePage;
