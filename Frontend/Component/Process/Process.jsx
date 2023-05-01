import React from "react";
import { RiFileList3Line } from "react-icons/ri";
import Circle from "../Common/Circle";
import { Title } from "../Common/Card";
import LineName from "../Common/lineName";
import { FiPenTool } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
const ProcessData = [
  {
    id: "1",
    icon: <RiFileList3Line color="white" className="icon fs-1" />,
    step: "Planning",
    img: "media/arrow1.png",
  },
  {
    id: "2",
    icon: <FiPenTool color="white" className="icon fs-1" />,
    step: "Design",
    img: "media/arrow1.png",
  },
  {
    id: "3",
    icon: <BsBuildings color="white" className="icon fs-1" />,
    step: "Construct",
    img: "media/arrow1.png",
  },
  {
    id: "4",
    icon: <GiLaurelsTrophy color="white" className="icon fs-1" />,
    step: "Finishing",
  },
];

const Process = () => {
  return (
    <div className="process container-fluid">
      <div className="process-section d-flex flex-column justify-content-evenly">
        <center
          style={{ color: "white" }}
          className=" d-flex flex-column gap-4 align-items-center"
        ><LineName item="How We Work"/>
          <h2 className="fw-bold py-2">Our  Process </h2>
          <small>
          We believe in a customer-focused approach. <br /> Our process begins with understanding your needs and the <br /> environment in which the project will take place.  
          </small>
        </center>
        <div className="d-flex">
          <div className="w-100 pt-5">
            <div class="steps container d-flex item text-center justify-content-evenly gap-5">
              {ProcessData.map((item) => (
                <div className="icon-holder position-relative">
                  <div className="d-flex flex-column">
                    <Circle item={item.icon} />

                    <h6>
                      <span>0{item.id}. </span>
                      {item.step}
                    </h6>
                  </div>
                  <img
                    src={item.img}

                    className={`position-absolute ${item.step}`}
                    alt=""
                    style={{ transform: "rotateX(180deg)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
