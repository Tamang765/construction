import AboutMarvelous from '@/Component/AboutMarvelous/AboutMarvelous'
import Counter from '@/Component/Counter/Counter'
import ServiceCard from '@/Component/Services/ServiceCard'
import { ServiceData } from '@/Component/Services/Services'
import Values from '@/Component/Values/Values'
import React from 'react'

const services = () => {

  return (
      <div className='container-fluid services '>
          <AboutMarvelous title="About Services" heading="What we Do" />
          <div className="container  my-5 pt-5">     
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                  
                  {ServiceData.map((item) => (
              <div className="services-card" style={{width:"24.2rem"}}>
                          
                  <ServiceCard heading={item.heading} detail={item.detail.slice(0,100)} image={item.img.slice(0, 1)} icon={item.icon} link={item.link} />
              </div>
              ))}
              </div>

          </div>
          <Counter />
          <Values/>
      </div>
  )
}

export default services