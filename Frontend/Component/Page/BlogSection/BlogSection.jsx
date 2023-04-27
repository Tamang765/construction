import AboutMarvelous from "@/Component/AboutMarvelous/AboutMarvelous";
import { BlogData } from "@/Component/Blog/Blog";
import { MdLocationCity } from "react-icons/md";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlog, getAllBlogAsync } from "@/Redux/Slice/BlogSlice";
import { toast } from "react-toastify";
import { loaderFunc } from "../../Team/Teams";
const BlogSection = () => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [categorytitle, setCategoryTitle] = useState("");
  const dispatch = useDispatch();

  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blog
  ); 
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(getAllBlogAsync());
      setLoading(false);
      console.log(blogs);
    }, 1000);
    return () => clearTimeout(timeout);

  }, [dispatch]);
  if (loading) {
    return loaderFunc();
  }

  return (
    <div className="blogsection container-fluid">
      <AboutMarvelous
        title={`${active ? "Category - " : ""}${categorytitle} Our News`}
        heading="Our Blog"
      />
      <div className="container mt-5 px-5">
        
        <div className="row pt-5">
          <div className="blog-list col-lg-8" style={{ paddingRight: "2rem" }}>
   
            {active ? (
              <>
                {filterData.map((item) => (
                  <div div className="blog-item" key={item.id}>
                    <div
                      className="img-holder position-relative"
                      style={{ borderRadius: "10px" }}
                    >
                      <img src={item.img[0]} alt="" width={789} height={460} />
                      <div className="position-absolute bottom-0 bg-warning p-3">
                        {item.date}
                      </div>
                    </div>
                    <div className="blog-item-content pt-4 mb-5 bg-white">
                      <div className="blog-item-meta d-flex flex-column px-4">
                        <h3 className="blog-item-meta-heading fw-bolder">
                          {item.heading}
                        </h3>
                        <small className="lh-lg pt-2">{item.description}</small>
                        <hr />
                        <span className="blog-item-meta-btn  d-flex justify-content-between align-items-center">
                          <span className="d-flex align-items-center gap-2 py-3">
                            <MdLocationCity
                              className="fs-3"
                              color="orangered"
                            />
                            {item.category}
                          </span>
                          <Link
                            href={`/blog/${item.id}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "600",
                            }}
                          >
                            <strong>Read Me</strong>{" "}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
                <>
{blogs.map((item) => (
            <span className="asd">
              { item.title}
                    </span>
                  ))
}
                {BlogData.map((item) => (
                  <div div className="blog-item" key={item.id}>
                    <div
                      className="img-holder position-relative"
                      style={{ borderRadius: "10px" }}
                    >
                      <img src={item.img[0]} alt="" width={789} height={460} />
                      <div className="position-absolute bottom-0 bg-warning p-3">
                        {item.date}
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
                            <MdLocationCity
                              className="fs-3"
                              color="orangered"
                            />
                            {item.category}
                          </span>
                          <Link
                            href={`/blog/${item.id}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "600",
                            }}
                          >
                            <strong>Read Me</strong>{" "}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="col-lg-4 pl-4">
  
            <RecentPost />
            <Categories
              setActive={setActive}
              setFilterData={setFilterData}
              active={active}
              setCategoryTitle={setCategoryTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
