import { BlogData } from '@/Component/Blog/Blog'
import Blog1 from '@/Component/Page/Blog1/Blog1'
import React from 'react'
import { useState } from 'react';

const exterior = () => {
  const [active, setActive] = useState(false);
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);
  console.log(active);
  const filterBlog = BlogData.filter((item) => item.id === "4");
  return (
    <div>
      {filterBlog.map((items, index) => (
        <Blog1 key={index} id={items.id} data={filterBlog} item={items} active={active} setActive={setActive} title={items.title} />
      ))
      }
    </div>
  )
}
export default exterior