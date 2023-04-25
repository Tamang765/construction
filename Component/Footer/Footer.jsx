import React from 'react'
import { BsHouse, BsMailbox, BsPhone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'


const TopFooterData = [{
    id: "1",
    head: "Call Us",
    info: "+97981237512",
    icon: <BsPhone className='fs-1' color='white' />
},
{
    id: "2",
    head: "Write to us",
    info: "info@app.technologies.com",
    icon:<BsMailbox className='fs-1'/>
    },
    {
        id: "3",
        head: "Address",
        info: "Kathmandu Sahara",
        icon:<BsHouse className='fs-1'/>
    }
]
const Footer = () => {
  return (
      <div className='footer container-fluid'>
              <div className="container d-flex justify-content-evenly " style={{ border: "1px solid #9999", paddingBlock: "1.5rem" }} >
          {TopFooterData.map((item) =>
          (<div className='contact d-flex align-items-center  text-white gap-5' key={item.id}>
                  <span className='icon'>{ item.icon}</span>
              <div className="desc d-flex flex-column">
                      <span>{ item.head}</span>
                      <span>{ item.info}</span>
              </div>
              <span className='divider' style={{height:"7vh",width:"1px",background:"white"}}></span>
              </div>
          ))    
          }
          </div>
          <div className='container d-flex pt-5 justify-content-between' style={{lineHeight:"32px"}}>
          <div className="about-section" style={{width:"20vw"}}>
              <div className="row">
                  <div className="about-marvalos text-white d-flex flex-column">
                      <h2 className='fw-bold pt-5'>About <span>Logo</span></h2>
                      <small>Culpa reprehenderit deserunt Lorem aliqua esse cillum enim mollit minim qui. Id in officia aliquip ut amet non cupidatat amet.</small>
                      <div className="btn-group d-flex gap-3 pt-3">
                          <span className='icon' style={{width:"2.1rem",height:"30px"}}><FaWhatsapp  className='fs-5'/></span>
                          <span className='icon' style={{width:"2.1rem",height:"30px"}}><FaFacebookF className='fs-5'/></span>
                          <span className='icon' style={{width:"2.1rem",height:"30px"}}><FaInstagram className='fs-5'/></span>
                          <span className='icon' style={{width:"2.1rem",height:"30px"}}><FaYoutube   className='fs-5' /></span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="quick-links text-white">
              <h2 className='fw-bold pt-5'>Quick Links</h2>
              <ul>
                  <li>About</li>
                  <li>About</li>
                  <li>About</li>
                  <li>About</li>
              </ul>
              </div>
          <div className="subscribe text-white">
                  <h2 className='fw-bold pt-5'>Subscribe</h2>
                  <small>Want to be notified about our news. Just sign up <br /> and we'll send you a notification by email.</small>
                  <div   className='position-relative d-flex justify-content-center align-items-center' style={{width:"fit-content"}}>
                  <input type="text" placeholder='Email address' style={{width:"20vw",height:"6vh",padding:"2rem",outline:"none"}}/>
                      <span className="btn icon text-white position-absolute end-0" style={{width:"4vw",height:"50px"}}>send</span>
                      </div>
              </div>
          </div>
          <div className="container text-white"> 
          <hr />
            <small>@2023 <span className='text-warning'>Marvelous.</span>All rights reserved. </small>
          </div>
    </div>
  )
}

export default Footer