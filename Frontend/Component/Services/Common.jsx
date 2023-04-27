import AboutMarvelous from "@/Component/AboutMarvelous/AboutMarvelous";
import Client from "@/Component/Client/Client";
import Image from "@/Component/Common/Image";
import LineName from "@/Component/Common/lineName";
import Counter from "@/Component/Counter/Counter";
import ServicesCards from "@/Component/Services/ServicesCards";
import { ServiceData } from "@/Component/Services/Services";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Values from "@/Component/Values/Values";
import React from "react";
import Slider from "react-slick";
import { Title } from "../Common/Card";

const Common = ({filteredId,link,id }) => {
  var settings = {
    dots: true,
    infinite: false,
    arrows:false,
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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const otherServices = ServiceData.filter((item) => (item.id !== id))
  console.log(otherServices);
  return (
    <>
      <div className="ServicePart container-fluid">
        <AboutMarvelous heading="What we Do" titleBlog="Our Services" />
        <div className="container my-5 py-5">
          {filteredId.map((services) => (
            <div className="row d-flex justify-content-center gap-2 pl-0">
              <h3>{services.heading}</h3>
              <small>{services.detail}</small>
              <ol className="services-list pl-0">
                {services.list.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ol>
            </div>
          ))}
          <div className="img-holder">
            {ServiceData.slice(0, 1).map((items) => (
              <Image
                items={items}
                Data={ServiceData}
                imgWidth={610}
                imgHeight={420}
              />
            ))}
          </div>
          {filteredId.map((items) => (
            <div className="details" key={items.id}>
              <small>{items.detail}</small>
                  <h3 className="pt-3">{ items.question}</h3>
              <small>{items.answer}</small>
            </div>
          ))}
        </div>
        <div className="other-services p-0">
          <div className="container">
            <center className="my-5 pb-4">
              <LineName item="What We Do" />
              <h2>
                Other <Title title="Services"/>
              </h2>
            </center>
            <Slider {...settings}>
              {otherServices.map((item) => (
                <ServicesCards
                  heading={item.heading}
                  detail={`${item.detail.slice(0, 100)}............read more`}
                  image={item.img.slice(0, 1)}
                  icon={item.icon}
                  otherlink={item.link}
                />
              ))}
            </Slider>
          </div>
        </div>
        <Testimonial />
        <Client />
      </div>
    </>
  );
};

export default Common;
