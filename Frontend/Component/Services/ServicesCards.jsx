import Link from "next/link";
import React from "react";
import { ServiceData } from "./Services";

const ServicesCards = ({ image, heading, detail, icon, link ,otherlink}) => {
  return (
    <div className="services d-flex w-100 pt-3" style={{ height: "inherit" }}>
      <div
        className="service-card border-0"
        style={{ borderRadius: "20px" }}
      >
        <div>
        <Link href={link?`${link}` : `${otherlink}`}>
            <img src={image} alt="" style={{ width: "100%" }} />
            </Link>
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
        <div className=" mx-4 pt-5 mt-5">
          <h3 className="our-services-head fw-bold fs-6">{heading}</h3>
          <small  style={{ fontSize: "smaller" }}>
            {detail}
          </small>
          <div className="btn d-flex flex-column align-items-start py-4" style={{width:"fit-content"}}>
            <Link href={link?`${link}` : `${otherlink}`}>
              <small className="fs-7 fw-bold">View Service</small>{" "}
            </Link>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCards;