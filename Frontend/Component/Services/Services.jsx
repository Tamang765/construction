import Link from "next/link";
import LineName from "../Common/lineName";
import Slider from "react-slick";
import { BsBuildings, BsFillHouseHeartFill } from "react-icons/bs";
import { Title } from "../Common/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicesAsync } from "@/Redux/Slice/serviceSlice";
import ServicesCards from "./ServicesCards";
import { GiAutoRepair, GiElectric } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { FaPaintRoller, FaRegHandshake } from "react-icons/fa";

export const ServiceData = [
  {
    id: "1",
    heading: "Planning & Designing",
    img: ["/media/Services/1.jpg","/media/Services/2.jpg","/media/Services/3.jpg"],
    detail:
      "The process typically begins with a consultation to determine the needs, preferences, and budget. From there, the design team will work to create a plan that meets those needs. The main goal here is to create a detailed blueprint for the project that takes into account all of the needs &  factors and provides a clear roadmap for the construction process.",
    list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    icon: <FaPaintRoller color='white' className='fs-2' />,
    link: "planning",
    question: "What's the part of the service?",
    answer:"Pariatur duis nulla occaecat ad excepteur sunt eiusmod sit elit nulla cillum do. Dolor cillum est adipisicing mollit reprehenderit mollit reprehenderit magna do esse elit ad. Irure labore duis cupidatat incididunt aute reprehenderit do est consequat qui commodo laborum mollit in."
  },
  {
    id: "2",
    heading: "Construction",
    img: ["/media/Services/6.jpg","/media/Services/6.jpg","/media/Services/6.jpg","/media/Services/6.jpg"],
    detail:
      "After the design and planning phases are complete, construction teams take over to bring the project to life. We work closely with contractors and other professionals to oversee the physical construction of a project, ensuring that it is completed on time, on budget, and to the highest standards of quality We use only the highest quality materials in our construction projects, ensuring that you get the best results possible. Throughout the construction process potential risks including construction delays, cost overruns, and safety issues are managed and reduced.",
    buttonName: "View service",
    list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    icon: <BsBuildings color='white' className='fs-2' />,
    link: "construction",
    question: "What's the part of the service?",
    answer:"Pariatur duis nulla occaecat ad excepteur sunt eiusmod sit elit nulla cillum do. Dolor cillum est adipisicing mollit reprehenderit mollit reprehenderit magna do esse elit ad. Irure labore duis cupidatat incididunt aute reprehenderit do est consequat qui commodo laborum mollit in."
    
  },
  {
    id: "3",
    heading: "Interior Design",
    img: ["/media/Services/5.jpg","/media/Services/5.jpg","/media/Services/3.jpg","/media/Services/1.jpg"],
    detail:
      "Our interior designers work closely with clients to understand their needs and preferences, and then create functional, safe, and aesthetically pleasing interior spaces. We offer a complete range of architecture and interior design services, giving you the opportunity to create stunning spaces that reflect your style and personality. With our help, you can bring any concept or dream to life!",
      list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    icon: <BsFillHouseHeartFill color='white' className='fs-2' />,
    link: "design",
    question: "What's the part of the service?",
    answer:"Pariatur duis nulla occaecat ad excepteur sunt eiusmod sit elit nulla cillum do. Dolor cillum est adipisicing mollit reprehenderit mollit reprehenderit magna do esse elit ad. Irure labore duis cupidatat incididunt aute reprehenderit do est consequat qui commodo laborum mollit in."
  },
  {
    id: "4",
    heading: "Estimation",
    img: ["/media/Services/5.jpg","/media/Services/5.jpg","/media/Services/3.jpg","/media/Services/1.jpg"],
    detail:
      "We can quickly create estimations for your projects and be confident that they are accurate. We also guarantee quick turnaround time so you can remain on schedule with your projects.With detailed reports on every aspect of the project, you can have peace of mind knowing that your estimates are thoroughly covered.",
      list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    icon: <FaRegHandshake color='white' className='fs-2' />,
    link: "estimation",
    question: "What's the part of the service?",
    answer:"Pariatur duis nulla occaecat ad excepteur sunt eiusmod sit elit nulla cillum do. Dolor cillum est adipisicing mollit reprehenderit mollit reprehenderit magna do esse elit ad. Irure labore duis cupidatat incididunt aute reprehenderit do est consequat qui commodo laborum mollit in."
  },
  {
    id: "5",
    heading: "Property Valuation",
    img: ["/media/Services/3.jpg","/media/Services/5.jpg","/media/Services/3.jpg","/media/Services/1.jpg"],
    detail:
      "Our team of experts will accurately assess the value of your property based on various factors, ensuring that you get the best possible return on your investment.",
      list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    icon: <GrValidate color='white' className='fs-2' />
    ,
    link: "propertyValidation",
    question: "What's the part of the service?",
    answer:"Pariatur duis nulla occaecat ad excepteur sunt eiusmod sit elit nulla cillum do. Dolor cillum est adipisicing mollit reprehenderit mollit reprehenderit magna do esse elit ad. Irure labore duis cupidatat incididunt aute reprehenderit do est consequat qui commodo laborum mollit in."
  },

  {
    id: "6",
    heading: "Electrical",
    img: ["/media/Services/5.jpg","/media/Services/5.jpg","/media/Services/3.jpg","/media/Services/1.jpg"],
    detail:
      "No matter what your style or budget, we can help you find the perfect flooring & tiling for your space. From installation to maintenance, we ensure that your project is hassle-free and exceeds your expectations. At Marvelous,we offer a wide range of flooring and tiling options to fit your needs and budget. Our team of experts can help guide you through the selection process and provide professional installation to ensure that your new floors and tiles look beautiful and last for years to come.",
      list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    question: "What's the part of the service?",
  answer:"Veniam ex pariatur cillum voluptate occaecat. Adipisicing exercitation adipisicing nostrud ipsum est mollit laboris est. Laboris cupidatat dolor occaecat commodo proident nostrud sit nisi sint aliquip cillum ex. Ea sint ullamco deserunt nulla culpa occaecat commodo."
    ,
    icon: <GiElectric color='white' className='fs-2' />,
    link: "painting",
    
  },
  {
    id: "7",
    heading: "Repair & Maintenance",
    img: ["/media/Services/5.jpg","/media/Services/5.jpg","/media/Services/3.jpg","/media/Services/1.jpg"],
    detail:
      "Whether you need a quick repair or a full renovation, we have the solutions for you. In order to help you keep your home or office in top condition, we provide a comprehensive range of general repair & maintenance services.  Our team can create a customized maintenance plan to ensure that your home remains functional and well-maintained.",
      list:["Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.","Duisteyerionyer venenatis lacus gravida eros ut turpis interdum."],
    buttonName: "View service",
    question: "What's the part of the service?",
  answer:"Veniam ex pariatur cillum voluptate occaecat. Adipisicing exercitation adipisicing nostrud ipsum est mollit laboris est. Laboris cupidatat dolor occaecat commodo proident nostrud sit nisi sint aliquip cillum ex. Ea sint ullamco deserunt nulla culpa occaecat commodo."
    ,
    icon: <GiAutoRepair color='white' className='fs-2' />,
    link: "repair",
    
  },
];
const Services = () => {
  const dispatch = useDispatch();
  const { services, setError, setLoading } = useSelector((state) => state.service);
  useEffect(() => { 
    dispatch(getAllServicesAsync());
  console.log(services);
  },[dispatch])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="services container-fluid">
      <div className="container service-container" style={{ paddingTop: "7rem" }}>
        <center className="d-flex flex-column align-items-center">
        <LineName item="What We Do" />
        <h2 className="fw-bold py-2">
          Our <Title title="Services"/>
        </h2>
        </center>
        <Slider {...settings}>
          {ServiceData.slice(0,4).map((item) => (
            <ServicesCards heading={item.heading} detail={`${item.detail.slice(0,100)} . . .. . . . .read more`} image={item.img.slice(0, 1)} icon={item.icon} link={`services/${item.link}`} />
          ))}
        </Slider>
      </div>
      <br />
      <br />
        <center className="pt-2 my-4">

        <Link className="all-services"  href="/services">View all Services</Link>
        </center>
    </div>
  );
};

export default Services;
