import Slider from "react-slick";
import Circle from "../Common/Circle";
import LineName from "../Common/lineName";
import Client from "../Client/Client";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Title } from "../Common/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTestimonial } from "@/Redux/Slice/TestimonialSlice";
// const TestimonialData = [
//   {
//     id: "1",
//     Tesimonial: "Their expertise and experience were invaluable, and we were impressed by their dedication to quality and customer satisfaction. We highly recommend this agency to anyone looking for a partner they can trust",
//     by: "Suman Mali",
//     address: "Lalitpur,Nepal",
//   },
//   {
//     id: "2",
//     Tesimonial:
//     	"I was impressed by this engineering agency's commitment to sustainability and environmental responsibility. They took the time to understand our values and priorities and incorporated them into every aspect of our project.",
//     by: "Suman Mali",
//     address: "Lalitpur,Nepal",
//   },
//   {
//     id: "3",
//     Tesimonial:
//       "Their team was knowledgeable, professional, and easy to work with, and I would definitely recommend them to anyone looking for an engineering agency that shares their values. ",
//     by: "Suman Mali",
//     address: "Lalitpur,Nepal",
//   },
//   {
//     id: "4",
//     Tesimonial:
//       "We appreciated their professionalism and expertise, and we look forward to working with them again in the future.",
//     by: "Suman Mali",
//     address: "Lalitpur,Nepal",
//   },
//   {
//     id: "5",
//     Tesimonial: "This engineering agency truly understands the importance of collaboration and communication. They worked closely with our team throughout the entire project, keeping us informed and involved every step of the way.  ",
//     by: "Suman Mali",
//     address: "Lalitpur,Nepal",
//   }
// ];

const Testimonial = () => {
  const [show, setShow] = useState(false);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    initialSlide: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleVideo = () => setShow(true);
  const handleShow = () => setShow(false);
  const dispatch = useDispatch();
  const { testimonial, isError } = useSelector((state) => state.testimonial)
  useEffect(() => { 
    dispatch(getAllTestimonial())
  },[dispatch])
  return (
    <>
      <div className="testimonial container-fluid mt-5">
        <div className="container testimonial-container d-flex justify-content-between h-100 align-items-center">
          <div style={{ zIndex: "1" }}>
            <div className="btn" onClick={handleVideo}>
              <Circle item={<CiPlay1 className="fs-1" color="white" />} />
            </div>
            <Modal show={show} onHide={handleShow} centered>
              <Modal.Header closeButton></Modal.Header>
              <iframe
                width="498"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
            </Modal>
            <br />
            <LineName item="Promo Video" />
            <br />
            <h3>Video About Company</h3>
            <small>Video showing our 25 years of business experience</small>
          </div>
          <div
            className=" card testimonial-card text-muted pb-4"
            style={{ width: "27rem", marginBottom: "-10rem", zIndex: "1" }}
          >
            <div className="top-bg"></div>
            <div>
              <div className="px-4 pt-3">
                <LineName item="What said about us" />
                <h2 className=" text-black">Customer <Title title="Views"/></h2>
                <hr />
              </div>
              <div className="customer-review">
              <Slider {...settings}>
                {testimonial.map((item) => (
                  <div
                    className="testimonial-person d-flex flex-column justify-content-between align-items-center"
                    key={item._id}
                  >
                    <small>{`"${item.message}"`}</small>
                    <div className="d-flex align-items-center w-100 justify-content-evenly py-4 ">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="/media/team/comment2.jpg"
                          alt=""
                          width={40}
                          style={{ borderRadius: "50%" }}
                        />
                        <div className="d-flex ">
                          <h6>Author</h6>
                          <small className="name">{item.client?.clientName}</small>
                        </div>
                      </div>
                      <img
                        src="/media/quot.png"
                        alt=""
                        width={45}
                        height={35}
                        style={{ filter: "opacity(0.1)" }}
                      />
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
