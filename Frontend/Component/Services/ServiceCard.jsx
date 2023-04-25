import Link from "next/link";
import React from "react";
import { ServiceData } from "./Services";

const ServiceCard = ({ image, heading, detail, icon, link }) => {
  return (
    <div className="d-flex w-100 pt-5" style={{ height: "inherit" }}>
      <div
        className="cards  border-0"
        style={{ borderRadius: "20px", height: "53.5vh" }}
      >
        <div style={{ overflow: "hidden" }}>
          <img src={image} alt="" style={{ width: "100%" }} />
        </div>
        <div
          className="icon"
          style={{
            width: "4rem",
            height: "55px",
            background: "#ED5521",
            margin: "-1rem 1rem",
            position: "absolute",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <div className="our-services mx-4 pt-5 mt-4">
          <h3 className="our-services-head fw-bold fs-6">{heading}</h3>
          <small  style={{ fontSize: "smaller" }}>
            {detail}
          </small>
          <div className="btn d-flex flex-column align-items-start py-4">
            <Link href={`/${link}`}>
              <small className="fs-7 fw-bold">View Service</small>{" "}
            </Link>
            <span className="line"></span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ServiceCard;
