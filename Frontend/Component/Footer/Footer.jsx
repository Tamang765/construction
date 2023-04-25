import Link from "next/link";
import React from "react";
import { BsHouse, BsMailbox, BsPhone } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const TopFooterData = [
  {
    id: "1",
    head: "Call Us",
    info: "+97981237512",
    icon: <BsPhone className="fs-1" color="white" />,
  },
  {
    id: "2",
    head: "Write to us",
    info: "info@app.technologies.com",
    icon: <BsMailbox className="fs-1" />,
  },
  {
    id: "3",
    head: "Address",
    info: "Kathmandu Sahara",
    icon: <BsHouse className="fs-1" />,
  },
];
const Footer = () => {
  return (
    <div className="footer container-fluid ">
      <div
        className="footer-container container d-flex justify-content-evenly "
        style={{ border: "1px solid #9999", paddingBlock: "1.5rem" ,borderRadius:"30px",maxWidth:"70rem"}}
      >
        {TopFooterData.map((item) => (
          <div
            className="contact d-flex align-items-center  text-white gap-5"
            key={item.id}
          >
            <span className="icon">{item.icon}</span>
            <div className="desc d-flex flex-column">
              <strong>{item.head}</strong>
              <small >{item.info}</small>
            </div>
            <span
              className="divider"
              style={{ height: "7vh", width: "1px", background: "white" }}
            ></span>
          </div>
        ))}
      </div>
      <div
        className="container d-flex pt-5 justify-content-between flex-wrap"
        style={{ lineHeight: "32px" }}
      >
        <div className="about-section" >
          <div className="row">
            <div className="about-marvalos text-white d-flex flex-column">
              <h4 className="fw-bold pt-5">
                About <span>MARVALOUS</span>
              </h4>
              <small>
                Culpa reprehenderit deserunt Lorem aliqua esse cillum enim
                mollit minim qui. Id in officia aliquip ut amet non cupidatat
                amet.
              </small>
              <div className="btn-group d-flex gap-3 pt-3">
                <span
                  className="icon"
                  style={{ width: "2.1rem", height: "30px" }}
                >
                  <FaWhatsapp className="fs-5" />
                </span>
                <span
                  className="icon"
                  style={{ width: "2.1rem", height: "30px" }}
                >
                  <FaFacebookF className="fs-5" />
                </span>
                <span
                  className="icon"
                  style={{ width: "2.1rem", height: "30px" }}
                >
                  <FaInstagram className="fs-5" />
                </span>
                <span
                  className="icon"
                  style={{ width: "2.1rem", height: "30px" }}
                >
                  <FaYoutube className="fs-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-links text-white">
          <h4 className="fw-bold pt-5">Quick Links</h4>
          <ul>
            <li><Link href="/services">Services</Link> </li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="subscribe text-white">
          <h4 className="fw-bold pt-5">Subscribe</h4>
          <small>
            Want to be notified about our news. Just sign up <br /> and we'll
            send you a notification by email.
          </small>
          <div
            className="position-relative d-flex justify-content-center align-items-center"
            style={{ width: "fit-content" }}
          >
            <input
              type="text"
              placeholder="Email address"
              style={{
                width: "20vw",
                height: "4vh",
                  padding: "30px",
                borderRadius:"15px",
                outline: "none",
              }}
            />
            <span
              className="btn icon text-white position-absolute end-0"
              style={{ width: "4vw", height: "50px",marginRight:"8px" }}
            >
              send
            </span>
          </div>
        </div>
      </div>
      <div className="container text-white">
        <hr />
        <small>
          @2023 <span className="text-warning">Marvelous.</span>All rights
          reserved.{" "}
        </small>
      </div>
    </div>
  );
};

export default Footer;
