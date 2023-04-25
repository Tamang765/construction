import React from "react";

const Circle = ({ item }) => {
  return (
    <div
      className="circle d-flex icon align-items-center justify-content-center"
      style={{
        background: " #ffffff36",
        borderRadius: "50%",
        height: "13vh",
        width: "6.3vw",
      }}
    >
      <div>
        <span
          className="service-icon d-flex align-items-center justify-content-center"
          style={{
            background: "#ED5521",
            height: "10vh",
            borderRadius: "50%",
            width: "5vw",
          }}
        >
          {item}
        </span>
      </div>
    </div>
  );
};

export default Circle;
