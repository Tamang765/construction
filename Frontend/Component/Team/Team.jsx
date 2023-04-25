import Aos from "aos";
import LineName from "../Common/lineName";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Title } from "../Common/Card";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeam, getAllTeamAsync } from "@/Redux/Slice/teamSlice";
import { toast } from "react-toastify";
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
    expertImg: "/media/team/ujjwal.jpg",
    expertName: "Er. Shyam Raj Shrestha",
    position: "Co-Founder",
    expertDesc:
      "Mr. Shrestha Holds a Bachelor's degree from a prestigious institution in Bangalore, India and is a highly experienced civil engineer with over 5 years of experience in Residential, Commercial, and Infrastructure Projects. He has worked for various frameworks in Nepal like the Melamchi Water Supply Project and many more. Mr. Shrestha is responsible for planning, monitoring, property valuation, & supervising. ",
  },
];

const Team = () => {
  const dispatch = useDispatch();
  const { team, isLoading, isError,message } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getAllTeamAsync());
    console.log(team);
    Aos.init({
      duration: 800,
    });
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    initialSlide: 1,
    autoplaySpeed: 2000,
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
    <div className="team containe-fluid mt-5">
      <div className="container">
        <LineName item="Expert Worker" />
        <h2 className="fw-bold py-3">
          Meet <Title title="Our Team"/>
        </h2>
        <div className="card-holder pt-4 pb-5 ">

          <Slider {...settings}>
          {TeamData.map((item) => (
            <div className="cards d-flex flex-column align-items-center position-relative gap-4">
              <img src={item.expertImg} alt="" width={396} height={450} />
              <div className="hover-item d-flex flex-column w-100 px-5 position-absolute top-0">
                <h3 className="fw-bold">{item.expertName}</h3>
                <span>{ item.position}</span>
                <small style={{width:"inherit",paddingTop:"1rem"}}>{item.expertDesc}</small>
              </div>
              <div className="card-body tex-center position-absolute  "  style={{background:"#ED5521",width:"fit-content"}}>
                <h5 className="card-title">{item.expertName}</h5>
                <span>{ item.position}</span>
                </div>
              </div>

          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
