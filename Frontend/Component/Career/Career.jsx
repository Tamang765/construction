import Career from "@/pages/Career";
import AboutMarvelous from "../AboutMarvelous/AboutMarvelous";
import { BsArrowRight } from "react-icons/bs";
import Testimonial from "../Testimonial/Testimonial";
import Client from "../Client/Client";
import Link from "next/link";

const CareerData = [
  {
    id: "1",
    title: "Full Stack Developer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
  },
  {
    id: "2",
    title: "Staff Design Architect",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
  },
  {
    id: "3",
    title: "Senior Exhibit Designer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
  },
  {
    id: "4",
    title: "MERN Developer",
    type: "Development",
    location: "Kathmandu,Nepal",
    EmplomentType: "Full-time",
  },
];
const Careers = () => {
  return (
    <div className="career " style={{ background: "#f5f5f5" }}>
      <AboutMarvelous title="Job Opening" heading="Careers" />
      <div className="container px-5 mb-4">
        <div className="container mt-5  w-100 p-0" style={{ background: "white" }}>
          <div className="opening-career d-flex flex-column mb-3">
            {CareerData.map((career) => (
              <>
                <Link href="/contact">
                <div
                  className="open-posts d-flex align-items-center justify-content-between" 
                  style={{ paddingLeft: "8rem" }}
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
                      <h6>Location</h6>
                    </div>
                    <div className="col">{career.location}</div>
                  </div>

                  <div
                    className="col d-flex flex-column align-items-start"
                    style={{ paddingLeft: "8rem" }}
                  >
                    <div className="col d-flex align-items-center gap-5">
                      <div>
                        <h6>Employment Type</h6>
                        <div className="col">{career.EmplomentType}</div>
                      </div>
                    <BsArrowRight />
                    </div>
                  </div>
                </div>
                <hr />
                </Link>
              </>
            ))}
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
