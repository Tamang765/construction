import Link from "next/link";
import { TbCategory } from "react-icons/tb";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const NextPrev = ({ next, prev }) => {
  return (
    <div className="nextprev container-fluid my-5 py-4">
      <div className="d-flex justify-content-around">
        <div className="btn prev-btn">
          <Link href={`/project/${prev}`}>
            <BsArrowLeft /> Previous Project
          </Link>
        </div>
        <div className="icon">
          <Link href="/project">
            <TbCategory className="fs-3" />
          </Link>
        </div>
        <div className="btn next-btn">
          {next && (
            <Link href={`/project/${next}`}>
              Next Project <BsArrowRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NextPrev;
