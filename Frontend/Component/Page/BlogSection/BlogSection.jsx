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
  const [active, setActive] = useState(false);
  const [categorytitle, setCategoryTitle] = useState("");
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blog
  ); 
  useEffect(() => {
      dispatch(getAllBlogAsync());
  }, [dispatch]);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = blogs.map(dateString => {
    const dateObj = new Date(dateString);
    const monthName = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();
    return date
  })
  return (
    <div className="blogsection container-fluid">
      <AboutMarvelous
        title={`${active ? "Category - " : ""}${categorytitle} Our News`}
        heading="Our Blog"
      />
      <div className="container mt-5 px-5">
        <div className="row pt-5">
          <div className="blog-list col-lg-8" style={{ paddingRight: "2rem" }}>
                {blogs.map((item,index) => (
                  <div className="blog-item" key={index}>
                    <div
                      className="img-holder position-relative"
                      style={{ borderRadius: "10px" }}
                    >
                      <img src={item.image.filePath} alt="" width={789} height={460} />
                      <div className="position-absolute bottom-0 bg-warning p-3">
                        {date};
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
                            href={`/blog/${item.slug}`}
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
          </div>
          <div className="col-lg-4 pl-4">
            <RecentPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
