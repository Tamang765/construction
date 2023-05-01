import Career from "@/pages/Career";
import AboutMarvelous from "../AboutMarvelous/AboutMarvelous";
import { BsArrowRight } from "react-icons/bs";
import Testimonial from "../Testimonial/Testimonial";
import Client from "../Client/Client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCareerData } from "@/Redux/Slice/CareerSlice";

const CareerData = [
  {
    id: "1",
    title: "Full Stack Developer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
    jobDesc: "We are seeking a skilled civil engineer to join our team. The successful candidate will be responsible for managing projects from conception to completion, including design, budgeting, and construction oversight. The ideal candidate will have a bachelor's degree in civil engineering, experience in project management, and strong communication and leadership skills.",
    responsibility: [
      
        "	Manage civil engineering projects, including design, budgeting, and construction oversight." , "Manage civil engineering projects, including design, budgeting, and construction oversight","-	Conduct site visits and inspections to ensure compliance with safety and environmental regulations"
    ],
    requirements:["Bachelor's degree in civil engineering or a related field"," Bachelor's degree in civil engineering or a related field"]
  },
  {
    id: "2",
    title: "Staff Design Architect",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
    jobDesc: "We are seeking a skilled civil engineer to join our team. The successful candidate will be responsible for managing projects from conception to completion, including design, budgeting, and construction oversight. The ideal candidate will have a bachelor's degree in civil engineering, experience in project management, and strong communication and leadership skills.",
    responsibility: [
      
        "	Manage civil engineering projects, including design, budgeting, and construction oversight." , "Manage civil engineering projects, including design, budgeting, and construction oversight","-	Conduct site visits and inspections to ensure compliance with safety and environmental regulations"
    ],
    requirements:["Bachelor's degree in civil engineering or a related field"," Bachelor's degree in civil engineering or a related field"]
  },
  {
    id: "3",
    title: "Senior Exhibit Designer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
    jobDesc: "hahhaa are seeking a skilled civil engineer to join our team. The successful candidate will be responsible for managing projects from conception to completion, including design, budgeting, and construction oversight. The ideal candidate will have a bachelor's degree in civil engineering, experience in project management, and strong communication and leadership skills.",
    responsibility: [
      
        "	Manage civil engineering projects, including design, budgeting, and construction oversight." , "Manage civil engineering projects, including design, budgeting, and construction oversight","-	Conduct site visits and inspections to ensure compliance with safety and environmental regulations"
    ],
    requirements:["Bachelor's degree in civil engineering or a related field"," Bachelor's degree in civil engineering or a related field"]
  },
  {
    id: "4",
    title: "MERN Developer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
    jobDesc: "We are seeking a skilled civil engineer to join our team. The successful candidate will be responsible for managing projects from conception to completion, including design, budgeting, and construction oversight. The ideal candidate will have a bachelor's degree in civil engineering, experience in project management, and strong communication and leadership skills.",
    responsibility: [
        "	Manage civil engineering projects, including design, budgeting, and construction oversight." , "Manage civil engineering projects, including design, budgeting, and construction oversight","-	Conduct site visits and inspections to ensure compliance with safety and environmental regulations"
    ],
    requirements:["Bachelor's degree in civil engineering or a related field"," Bachelor's degree in civil engineering or a related field"]
  },
];
const Careers = () => {
  const [filterId, setFilterId] = useState();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {career, isLoading, isError } = useSelector((state) => state.career);
  const filteredData = career.filter((item) => item._id === filterId);
  const handleShow = (id) => {
    setFilterId(id);
  setShow(true)
}
  const handleClose = () => (
    setShow(false)
  )

  useEffect(() => {
    dispatch(getAllCareerData());
  }, [dispatch]);

  return (
    <div className="career " style={{ background: "#f5f5f5" }}>
      <AboutMarvelous title="Job Opening" heading="Careers" />
      <div className="container px-5 mb-4">
        <div className="container mt-5  w-100 p-0" style={{ background: "white" }}>
          <div className="opening-career d-flex flex-column mb-3">
            {career.map((career) => (
              <>
                <div
                  className="open-posts d-flex align-items-center justify-content-between" 
                  style={{ paddingLeft: "4rem" }}
                >
                  <div className="col d-flex flex-column align-items-start ">
                    <div className="col">
                      <h6 className="fw-bold">{career.title}</h6>
                    </div>
                    <div className="col">{career.type}</div>
                  </div>
                  <div
                    className="col d-flex flex-column align-items-start "
                    style={{ paddingLeft: "8rem" }}
                  >
                    <div className="col">
                      <h6 className="fw-bold">Location</h6>
                    </div>
                    <div className="col">{career.location}</div>
                  </div>
                  <div
                    className="col d-flex flex-column align-items-start "
                    style={{ paddingLeft: "8rem" }}
                  >
                    <div className="col">
                      <h6 className="fw-bold">Salary</h6>
                    </div>
                    <div className="col">{career.salary}</div>
                  </div>

                  <div
                    className="col d-flex flex-column align-items-start"
                    style={{ paddingLeft: "8rem" }}
                  >
                    <div className="details col d-flex align-items-center gap-3">
                      <div>
                        <h6 className="fw-bold">Employment Type</h6>
                        <div className="col">{career.type}</div>
                      </div>
               
                      <button className="show-more d-flex align-items-center" onClick={()=>handleShow(career._id)}>Details <BsArrowRight /></button>
                    
                    </div>
                  </div>
                </div>
                
                <hr />
 
              </>
            ))}
            <Modal show={ show} onHide={handleClose}>
              <Modal.Header closeButton>
                Job Description
              </Modal.Header>
              <Modal.Body>
                {
                  filteredData?.map((career) => (
                    <>
                      <small>  {career.jobDesc}</small>
                      <br />
                      <br />
                      <strong>Requirement</strong>
                      <ul>
                        {career.requirements}
                      </ul>
                      <strong>Responsibiity</strong>
                          <ul>
                            {career.responsibility}
                      </ul>
                      <Link href="mailto:marvelousconsults@gmail.com">Apply</Link>
                    </>
                  ))
                }
            
              </Modal.Body>
            </Modal>
          </div>
              </div>
              <small>Please submit a resume and cover letter with compensation history to <mark> info[at]construction.com</mark></small>
      </div>
              <Testimonial />
              <Client/>
    </div>
  );
};

export default Careers;
