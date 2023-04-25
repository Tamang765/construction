import CommonCareProject from '@/Component/Projects/CommonCardProject';
import NextPrev from '@/Component/Projects/NextPrev';
import { ProjectsData } from '@/Component/Projects/Projects';
import React from 'react'

const residential = () => {
    const filteredData = ProjectsData.filter(item => item.id === "3");
    return (
      <>{
        filteredData.map((items) => (
          < CommonCareProject firstSlice="0" lastSlice={items.id} area={items.area} heading={items.heading} desc={items.projectDesc} filterId={filteredData} client={items.client} category={items.category} list={items.Lists.list}  />
          ))
      }
        <NextPrev   prev="remodeling"/>
       </>
    );
}

export default residential