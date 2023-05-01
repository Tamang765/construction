import React from 'react';
import LineName from '../Common/lineName';
import { GiBarrier, GiBrickWall } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Title } from '../Common/Card';
import { MdFilterCenterFocus, MdGppGood } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
const ValuesData = [
    {
        id: "1",
        valuesHead: "Quality",
        valuesDetail: "Committed to delivering high-quality work, ensuring that our services meet or exceed industry standards, and continually striving to improve the work.",
        icon: <TbCertificate className='fs-1' color='white' />,
        iconB:<TbCertificate className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    }
,   {
    id: "2",
    valuesHead: "Client focus",
    valuesDetail: "Marvelous prioritizes the needs and expectations of their clients, taking a proactive approach to understanding their requirements, communicating effectively",
    icon: <MdFilterCenterFocus className='fs-1' color='white' />,
    iconB:<MdFilterCenterFocus className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    },
    {
        id: "3",
        valuesHead: "Professionalism",
        valuesDetail: "For us, professionalism means adhering to the highest standards of conduct and performance,  and continuously striving to improve our knowledge, skills, and expertise. ",
        icon: <GiBrickWall className='fs-1' color='white' />,
        iconB:<GiBrickWall className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    },
    {
        id: "4",
        valuesHead: "Innovative",
        valuesDetail: "Our engineers are always looking for creative solutions and new technologies to improve our services. ",
        icon: <HiOutlineLightBulb className='fs-1' color='white' />,
        iconB:<HiOutlineLightBulb className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    },
    {
        id: "5",
        valuesHead: "Safety",
        valuesDetail: "We always put safety first. The safety of workers, the public, and the environment are the top priority in all our construction projects. ",
        icon: <GiBarrier className='fs-1' color='white' />,
        iconB:<GiBarrier className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    },
    {
        id: "6",
        valuesHead: "Excellence",
        valuesDetail: "We strive for excellence in everything we do, from the quality of our work to the level of service we provide to our clients ",
        icon: <MdGppGood className='fs-1' color='white' />,
        iconB:<MdGppGood className='icon' style={{ color: "grey", opacity: "0.06", width: "7rem", background: "transparent", height: "auto" }}/>
    }


]
const Values = () => {
  return (
      <div className='Values container-fluid'>
          <div className="container">
              <div className="d-flex flex-column align-items-center justify-content-center py-5">
                  
              <LineName item="Our Values" />
              <h2 className='fw-bold py-2'>Core <Title title="Values"/></h2>
              </div>
              <div className="row all-values d-flex gap-4 justify-content-center">
                  {ValuesData.map((item) => (
                       <div  className="cards d-flex flex-column flex-wrap gap-3 position-relative" key={item.id} style={{width:"21.3vw",height:"fit-content", padding: "30px", border: "none", lineHeight: "29px",background:"white",borderRadius:"20px" }}>
                          <span className="icon">{item.icon} </span>
                          <h3>{ item.valuesHead}</h3>
                          <small>{ item.valuesDetail}</small>
                          <span className='before-icon position-absolute'>{item.iconB} </span>
               </div>
                ))
                   
                  }
              </div>
          </div>
    </div>
  )
}

export default Values