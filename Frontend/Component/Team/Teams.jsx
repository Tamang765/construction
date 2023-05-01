import Aos from "aos";
import LineName from "../Common/lineName";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Title } from "../Common/Card";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeam, getAllTeamAsync } from "@/Redux/Slice/teamSlice";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const TeamData = [
  {
    id: "1",
    expertImg: "/media/team/suman.jpg",
    expertName: "Suman Mali",
    position: "Technical Exert",
    expertDesc:
      "Mr. Mali Holds a Bachelor's degree from a prestigious institution in Bangalore, India and is a highly experienced full-stack developer with over 5 years of experience. He is responsible for leading the technical strategy and operations of the company. Reach him via:",
  },
  {
    id: "2",
    expertImg: "/media/team/ujjwal.jpg",
    expertName: "Er. Ujjwal Silwal",
    position: "CEO & Co-Founder",
    expertDesc:
      "Mr. Silwal Holds a Bachelor's degree from a prestigious institution in Bangalore, India and is a highly experienced civil engineer with over 5 years of experience in Land Development & Infrastructure Projects. He has worked for various frameworks in Nepal in various sectors like Roadshow Housing, Kalimati Trade Center, Balaju Complex and many more. Mr. Silwal is responsible for construction procurement and quality control. ",
  },
  {
    id: "3",
    expertImg: "/media/team/shyam.jpg",
    expertName: "Er. Shyam Raj Shrestha",
    position: "Co-Founder",
    expertDesc:
      "Mr. Shrestha Holds a Bachelor's degree from a prestigious institution in Bangalore, India and is a highly experienced civil engineer with over 5 years of experience in Residential, Commercial, and Infrastructure Projects. He has worked for various frameworks in Nepal like the Melamchi Water Supply Project and many more. Mr. Shrestha is responsible for planning, monitoring, property valuation, & supervising. ",
  },
];
export const loaderFunc = () => {
  return (
    <div className="loader position-absolute top-0 start-0 bg-white  w-100 h-100 z-100">
      <div className="d-flex justify-content-center align-items-center w-100 h-100  ">
        loading .... ... .
        <Spinner animation="grow" />
      </div>
    </div>
  );
};

const Teams = () => {
  const dispatch = useDispatch();
  const { teams, isLoading, isError, message } = useSelector(
    (state) => state.teams
  );
const images=teams.map((item)=>item.image?.filePath)
  useEffect(() => {
    dispatch(getAllTeamAsync());
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    initialSlide: 1,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  return (
    <div className="teams containe-fluid mt-5">
      <div className="container">
        <LineName item="Expert Worker" />
        <h2 className="fw-bold py-3">
          Meet <Title title="Our Team" />
        </h2>
        <div className="card-holder pt-4 pb-5 ">
        <Slider {...settings}>
    {teams.map((item) => (
      <div class="image-holder container" key={item._id}>
        <img src={item.image?.filePath} class="image" />
        <div
          className="bottom-info position-absolute start-50 translate-middle"
          style={{
            top: "92%",
            backgroundColor: "#ed5521",
            padding: "10px",
            color: "white",
            borderRadius: "15px",
          }}
        >
          <strong>{item.name}</strong>
          <br />
          <small>{item.position}</small>
        </div>
        <div class="overlay">
          <div class="text">
            <strong>{item.name}</strong>
            <br />
            <strong>{item.position}</strong>
            <br />
            <br />
            <small>{item.description}</small>
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
    ))}
            </Slider>

</div>

      </div>
    </div>
  );
};

export default Teams;
