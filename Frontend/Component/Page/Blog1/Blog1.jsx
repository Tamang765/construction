import AboutMarvelous from "@/Component/AboutMarvelous/AboutMarvelous";
import RecentPost from "../BlogSection/RecentPost";

import Categories from "../BlogSection/Categories";
import { BlogData } from "@/Component/Blog/Blog";
import QuoteBy from "../BlogSection/QuoteBy";
import Image from "@/Component/Common/Image";
import Author from "../BlogSection/Author";
import Reply from "../BlogSection/Reply";
import { useState } from "react";
import { MdLocationCity } from "react-icons/md";
import Link from "next/link";
  

const Blog1 = ({ data,item,active,setActive,title,id}) => {
  const middlepart = item.description.length / 2;
  const [filterData, setFilterData] = useState([]);
  const [categorytitle, setCategoryTitle] = useState();
  const deactive = () => (
    setActive(!active)
  )
  return (
    <div className="blog-1 container-fluid" style={{ background: "#f5f5f5" }}>
      <AboutMarvelous
        heading="Blog / Post"
        titleBlog={`${active?"Category: " +categorytitle:"Our Blog"} `}
        author={item.author}
        date={item.date}
        authorPic={item.authorImg}
      />
      <div className="container mt-5 ">
      <div className="blog-section row ">
          {active ? (
            <>
            <div className="blog-list col-md-8 " style={{ paddingRight: "2rem" }}>  {
 
                filterData.map((item) => (
                      
                      <div div className="blog-item" key={item.id} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                      <div className="img-holder position-relative"style={{borderRadius:"10px"}}>
                        <img src={item.img[0]} alt="" width={836} height={500}  />
                        <div className="position-absolute bottom-0 bg-warning p-3">
                          Dec 20
                        </div>
                      </div>
                      <div className="blog-item-content pt-4 mb-5">
                        <div className="blog-item-meta d-flex flex-column px-4">
                          <h3 className="blog-item-meta-heading fw-bolder">
                            {item.heading}
                          </h3>
                          <small className="lh-lg pt-2">{item.description}</small>
                          <hr />
                          <span className="blog-item-meta-btn  d-flex justify-content-between align-items-center">
                            <span className="d-flex align-items-center gap-2 py-3">
                              <MdLocationCity className="fs-3" color="orangered" />
                              {item.category}
                            </span>
                            <Link href={ `/blog/${item.id}`} onClick={deactive} style={{textDecoration:"none",color:"black",fontWeight:"600"}}><strong>Read Me</strong> </Link>
                          </span>
                        </div>
                      </div>
                  </div>                
                    ))
              }
                </div>
              <div className="categories-section col-md-4">
            <RecentPost />
                <Categories setActive={setActive} active={active} setFilterData={setFilterData} setCategoryTitle={setCategoryTitle} />
          </div>
              </>
          ) :
            (
              <><div className="blog-img-section col-md-8">
                <div className="img-holder">
                  <img
                    src={item.img[0]}
                    width={740}
                    height={460}
                    alt=""
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                      boxShadow: "2px 7px 25px 15px rgba(0, 0, 0, 0.05);",
                    }} />
                </div>
                <div className="blog-1-title mt-3 pt-3">
                  <h2 className="fw-bold">{item.heading}</h2>
                </div>
                <div
                  className="blog-1 description py-5"
                  style={{
                    lineHeight: "35px",
                    paddingRight: "8rem",
                    textAlign: "justify",
                  }}
                >
                  <small style={{ paddingRight: "4rem" }}>
                    {item.description}
                  </small>
                  <div className="bg-white">
                    <QuoteBy />
                  </div>
                  <small>{item.description.slice(middlepart + 400)}</small>
                  {/* <div className="blog-images py-4">
                    {data.map((items) => (
                      <Image items={items} Data={data} imgWidth={350} imgHeight={280} />
                    ))}
                  </div>
                  <small>{item.description.slice(middlepart + 50)}</small>
                  <Author item={ item} /> */}
                </div>
              </div><div className="categories-section col-md-4">
                  <RecentPost />
                  <Categories setActive={setActive} active={active} setFilterData={setFilterData} setCategoryTitle={setCategoryTitle}/>
                </div></>)
          }

        </div>
      </div>
    </div>
  );
};

export default Blog1;
