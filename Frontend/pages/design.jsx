import NextPrev from '@/Component/Projects/NextPrev';
import Common from '@/Component/Services/Common'
import { ServiceData } from '@/Component/Services/Services'
import React from 'react'

const design = () => {
    const filteredId = ServiceData.filter((item) => (item.id === "2"));
  return (
      <>
          {
              filteredId.map((items) => (
                  <Common id={items.id} filteredId={filteredId} link={items.link}/>
              ))
          }
          
          
      </>
  )
}

export default design