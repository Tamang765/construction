import React from "react";
import AboutMarvelous from "../AboutMarvelous/AboutMarvelous";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";
import Map from "./Map";
import SendMessage from "./SendMessage";
import FAQ from "./FAQ";

const ContactData = [
  {
    id: "1",
    heading: "Call Us",
    detail: "+977 9813264124",
    icon: <BsPhone color="white" className="fs-3" />,
  },
  {
    id: "2",
    heading: "Fax Number",
    detail: "+977 9813264124",
    icon: <BsPhone color="white" className="fs-3" />,
  },
  {
    id: "3",
    heading: "Call Us",
    detail: "+977 9813264124",
    icon: <BsPhone color="white" className="fs-3" />,
  },
  {
    id: "4",
    heading: "Call Us",
    detail: "+977 9813264124",
    icon: <BsPhone color="white" className="fs-3" />,
  },
];
const Contact = () => {
  return (
    <div className="contact container-fluid ">
      <AboutMarvelous heading="Get in touch" title="Contact Us" />
      <div className="container">
        <div className="contact-section d-flex pt-5 mt-4 justify-content-center align-items-center ">
          <div
            className="detail-contact col"
            style={{ paddingTop: "34px", paddingInline: "3rem" }}
          >
            <h3 className="fw-bold">Contact Information</h3>
            <small>
            Thank you for visiting our website. If you have any questions, comments, or feedback, we would love to hear from you. Please fill out the form below, and one of our representatives will get back to you as soon as possible. Alternatively, you can reach us via phone or email using the contact information provided on this page. We are always happy to hear from our visitors and are committed to providing exceptional customer service. Thank you for your interest in our organization, and we look forward to hearing from you.
            </small>
            <div className="d-flex flex-column gap-3 mt-4">
              {ContactData.map((item) => (
                <div className="d-flex align-items-center gap-3" key={item.id}>
                  <span className="icon">{item.icon}</span>
                  <div className="details d-grid">
                    <h6 className="fw-bold">{item.heading}</h6>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col contact-form " style={{ paddingInline: "3rem" }}>
            <SendMessage />
          </div>
        </div>
        <Map />
      </div>
        <FAQ />
    </div>
  );
};

export default Contact;
