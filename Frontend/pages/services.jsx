import AboutMarvelous from '@/Component/AboutMarvelous/AboutMarvelous'
import Counter from '@/Component/Counter/Counter'
import ServicesCards from '@/Component/Services/ServicesCards'
import { ServiceData } from '@/Component/Services/Services'
import Values from '@/Component/Values/Values'
import React, { useEffect, useState } from 'react'
import { loaderFunc } from '@/Component/Team/Teams'

const services = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }, [setLoading]);
    if (loading) {
      return loaderFunc();
    }
  return (
      <div className='container-fluid services '>
          <AboutMarvelous title="About Services" heading="What we Do" />
          <div className="container  my-5 pt-5">     
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                  
                  {ServiceData.map((item) => (
              <div className="services-card" style={{width:"24.2rem"}}>     
                  <ServicesCards heading={item.heading} detail={item.detail.slice(0,100)} image={item.img.slice(0, 1)} icon={item.icon} link={`services/${item.link}`} />
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