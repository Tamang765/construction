import {  BlogData, Category } from '@/Component/Blog/Blog'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
const Categories = ({ setActive,setFilterData, active,setCategoryTitle}) => {

    const handleClick = (category) => 
        {
       const filteredBlog=BlogData.filter((item)=>(item.category === category))
        setActive(true);
        setFilterData(filteredBlog);
        console.log(category);
        setCategoryTitle(category);
    }
    const allLoader = () => (
        setActive(false)
    )
  return (
      <div className='categories container-fluid mt-5' style={{background:"white",boxShadow:
      "2px 7px 25px 15px rgba(0, 0, 0, 0.05)",borderRadius:"20px"}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-12" >
                      <div className="categories-heading pt-3">
                          <h2 className='fw-bolder fs-6  text-center'>Categories</h2>
                      </div>
                      <hr />
                      <div className=" d-grid gap-3 py-3">
                      <Link className='btn-category  text-start' href="/blog" onClick={allLoader} style={{paddingLeft:"12px"}}><AiOutlineRight color='orangered'/> All Categories</Link>
                      {Category.map((item) => (         
                          <>
                              <small className='btn-category btn text-start'  onClick={()=>handleClick(item.name)}><AiOutlineRight color='orangered'/> { item.name}</small>
                      </>
                          ))
                          }
                          
                        </div>
              </div>
          </div>
          </div>
    </div>
  )
}

export default Categories