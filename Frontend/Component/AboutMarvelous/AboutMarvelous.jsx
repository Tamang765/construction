import React from "react";
import LineName from "../Common/lineName";
import { BsCalendar} from "react-icons/bs";
import { BlogData } from "../Blog/Blog";


const AboutMarvelous = ({ titleBlog,title, heading,author,authorPic,date }) => {
  return (
    <div className="about-marvelous container-fluid">
      <br />
      <div className="container h-100 d-flex justify-content-start align-items-center ">
        <center className="head-about">
          <LineName item={heading} />
          <h1 style={{color:"white",fontWeight:"700",width:"40rem",textAlign:"start"}}>{ titleBlog}</h1>
          <h2 className="text-white text-start">
             <span>{title}</span>{" "}
          </h2>
          {authorPic || author || date ?
         (   <div className="d-flex pt-4 align-items-center gap-3">
            <div className="img-holder d-flex gap-3 align-items-center">
              <img src={ authorPic} alt="" width={40} style={{ borderRadius: "50%" }} />
              <small style={{ color: "White" }}>{author}</small>
            </div>
            <BsCalendar color="orangered"/>
             <small style={{color:"white"}}>{ date}</small> 
            </div>):("")
        }
        </center>
      </div>
    </div>
  );
};

export default AboutMarvelous;
