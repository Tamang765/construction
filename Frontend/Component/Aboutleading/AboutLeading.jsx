import React from "react";

const AboutleadingData = [
  {
    id: "1",
    image: "/media/services/1.jpg",
    heading: "The story of how Marvelous company was founded",
    detail:
      "Marvelous Construction & Engineering Consult is an engineering agency based in Nepal. The company was founded in 2022 by a group of engineers. The founding of Marvelous was driven by the need for more reliable and cost effective construction solutions. Suman Mali and his colleagues saw an opportunity to create an organization that could provide rigorous, high-quality, and cost effective construction services. They envisioned an organization that would bring together experts from a range of disciplines, including engineering, technology, and designing. Today, it is one of the reputed and most searched companies in the country.",
  },
  {
    id: "2",
    image: "/media/services/1.jpg",
    heading: "Leading Way In Building & Civil Construction!",
    detail:"At our firm, we pride ourselves on our attention to detail, technical expertise, and commitment to delivering projects on time and within budget. Our team consists of highly skilled engineers with diverse backgrounds and experience, allowing us to tackle projects across a wide range of industries and disciplines."
  },
];
const AboutLeading = () => {
  return (
    <div className="AboutLeading container-fluid  position-relative">
      <div className="container d-flex gap-4 my-5 p-5 justify-content-center flex-wrap">
        {AboutleadingData.map((item) => (
          <div className="leading-img col" key={item.id}>  
                <div className="image-holder position-relative">
                <img
              src={item.image}
              alt=""
              width={550}
              height={460}
              style={{ borderRadius: "15px" }}
            />
                </div>
            <div className="working-experience d-flex flex-column gap-3 pb-4">
              <h3 className="fw-bold ">{item.heading}</h3>
              <p style={{lineHeight:"30px"}}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutLeading;
