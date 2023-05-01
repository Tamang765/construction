import { BlogData } from "@/Component/Blog/Blog";
import { FaReplyAll } from "react-icons/fa";

const Author = ({ item}) => {
  return (
    <div className="author container-fluid mt-5">
      <div className="container">
        <div className="row">
            <div className="col-md-12 d-flex align-items-center gap-4">
            <div className="img-holder">
              <img
                src={item?.authorImg}
                alt=""
                width={95}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-holder" style={{ lineHeight: "20px" }}>
              <h6 className="fw-bold">{item?.author}</h6>
              <small>
                asdsad
              </small>
              {/* <div className="reply d-flex gap-2 align-items-center pt-2 ">
                <FaReplyAll className="fs-5" color="grey" />
                <span>Reply</span>
              </div> */}
            </div>
                
        </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
