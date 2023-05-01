import { BlogData } from "@/Component/Blog/Blog";
import { getAllBlogAsync } from "@/Redux/Slice/BlogSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RecentPost = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blog
  ); 
  const [recentPost, setRecentPost] = useState([]);
  
  useEffect(() => {
    dispatch(getAllBlogAsync());
  }, [dispatch]);

  useEffect(() => {
    setRecentPost(blogs);
  }, [blogs]);

  const today = new Date();
  const fiveDaysAgo = new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000); 
  
  const sortedBlogPosts = recentPost.filter((post) => new Date(post.createdAt) >= fiveDaysAgo)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div
      className="recent-post container-fluid"
      style={{
        boxShadow: "2px 7px 25px 15px rgba(0, 0, 0, 0.05)",
        borderRadius: "20px",
      }}
    >
      <div className="row">
        <div
          className="col-md-12 pb-4"
          style={{ background: "white", borderRadius: "20px" }}
        >
          <div className="recent-post-heading pt-3">
            <h2 className="fw-bolder fs-6 text-center">Recent Posts</h2>
          </div>
          <hr />
          <div className="recent-post-list d-grid gap-4 pt-3">
            {sortedBlogPosts?.map((blogs) => (
              <div
                className="recent-post-list-item d-flex gap-3 align-items-center"
                key={blogs._id}
              >
                <Link  href={`/blog/${blogs.slug}`}>
                <div className="recent-post-list-item-image">
                  <img
                      src={`${blogs.image.filePath}`}
                    alt="blog-1"
                    width={130}
                    height={70}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                </Link>
                <div className="recent-post-list-item-heading">
                  <span className="hoverchange">{blogs.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
