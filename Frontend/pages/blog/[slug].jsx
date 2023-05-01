import AboutMarvelous from "@/Component/AboutMarvelous/AboutMarvelous";
import Image from "@/Component/Common/Image";
import Author from "@/Component/Page/BlogSection/Author";
import Categories from "@/Component/Page/BlogSection/Categories";
import QuoteBy from "@/Component/Page/BlogSection/QuoteBy";
import RecentPost from "@/Component/Page/BlogSection/RecentPost";
import { getBlogsByIDAsync } from "@/Redux/Slice/BlogSlice";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const blogpage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const [Data, setData] = useState();
  const [gallery, setGallery] = useState();
  const [active, setActive] = useState(false);
  const { oneblog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );
  useEffect(() => {
    dispatch(getBlogsByIDAsync(slug));
  }, [dispatch, slug]);
  useEffect(() => {
    setData(oneblog);
    setGallery(oneblog?.image);
  }, [oneblog, Data]);
  const [filterData, setFilterData] = useState([]);
  const [categorytitle, setCategoryTitle] = useState();
  const deactive = () => setActive(!active);
  return (
    <div className="blog-1 container-fluid" style={{ background: "#f5f5f5" }}>
      <AboutMarvelous heading="Blog / Post" title={Data?.title} date={Data?.createdAt} />
      <div className="container mt-5 ">
        <div className="blog-section row ">
          <>
            <div className="blog-img-section col-md-8">
              <div className="img-holder">
                <img
                  src={`${Data?.image.filePath}`}
                  width={740}
                  height={460}
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "2px 7px 25px 15px rgba(0, 0, 0, 0.05);",
                  }}
                />
              </div>
              <div className="blog-1-title mt-3 pt-3">
                <h2 className="fw-bold">{Data?.title}</h2>
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
                  {Data?.description}
                </small>
                <div className="bg-white">
                  <QuoteBy />
                </div>
                <small>asdasd</small>
                <div className="blog-images py-4">
                  <Image imgWidth={350} imgHeight={280} />
                </div>
                <small>asd</small>
                <div className="author container-fluid mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 d-flex align-items-center gap-4">
                        <div className="img-holder">
                          <img
                            src=""
                            alt=""
                            width={95}
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                        <div
                          className="text-holder"
                          style={{ lineHeight: "20px" }}
                        >
                          <h6 className="fw-bold">{Data?.user.name}</h6>
                          <small>asdsad</small>
                          {/* <div className="reply d-flex gap-2 align-items-center pt-2 ">
                <FaReplyAll className="fs-5" color="grey" />
                <span>Reply</span>
              </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="categories-section col-md-4">
              <RecentPost />
              <Categories
                setActive={setActive}
                active={active}
                setFilterData={setFilterData}
                setCategoryTitle={setCategoryTitle}
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default blogpage;
