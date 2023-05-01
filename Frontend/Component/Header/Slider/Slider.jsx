import LineName from "@/Component/Common/lineName";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { FiLinkedin } from "react-icons/fi";

const SliderData = [
  {
    id: "1",
    smallhead: "Architecture Design",
    bigHead: "We Build What You Want.",
    shortDesc:
      "We are a team of experts dedicated to listening to clients' needs and delivering customized solutions that meet their specific requirements.",
    img: "/media/slider/1.jpg",
  },
    {
      id: "2",
      smallhead: "Architecture Design",
      bigHead: "We Build What You Want.",
      shortDesc:
        "We are a team of experts dedicated to listening to clients' needs and delivering customized solutions that meet their specific requirements.",
      img: "/media/slider/2.jpg",
    },
    {
      id: "3",
      smallhead: "Architecture Design",
      bigHead: "We Build What You Want.",
      shortDesc:
        "We are a team of experts dedicated to listening to clients' needs and delivering customized solutions that meet their specific requirements.",
      img: "/media/slider/3.jpg",
    },
];
const Slider = () => {
  return (
    <div className="slider-section">
      <Carousel>
        {SliderData.map((item,index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption className="d-flex flex-column align-items-baseline gap-2">
              <LineName item={item.smallhead} />
              <h1 className="fw-bold" style={{ fontSize: "4rem" }}>
                {item.bigHead}
              </h1>
              <p>{item.shortDesc}</p>
              <div className="btn-group d-flex gap-3 mt-4">
                <Link href="/project">Our Project</Link>
                <Link href="/services">Our Services</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
