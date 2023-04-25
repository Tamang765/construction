import { BsCheck2, BsTrophy } from "react-icons/bs";
import LineName from "./lineName";
import { Children } from "react";
import Link from "next/link";

export const Title = ({ title }) => (
  <span style={{ color: "#ED5521" }}>{title}</span>
);
const Card = ({ heading, id, detail, image, cardDetail, children,path }) => {
  return (
    <div className="card-items">
      <div className="container">
        <div className="d-flex px-1 card-img-detail ">
          <div className="col">
            <LineName item="Construction Firm" />
            <h2 className="fw-bold py-2">
              {heading} <Title title="MARVELOUS" />
            </h2>
            <p style={{ lineHeight: "30px", paddingRight: "4rem" }}>{detail} {path ? (<Link href={path} style={{textDecoration:"none"}}>........read more</Link>):("") }</p>
            <ul
              style={{ lineHeight: "3rem" }}
              className="about-list  list-unstyled"
            >
              {Children.map(children, (child) => (
                <ul>
                  <span>
                    <BsCheck2 color="white" style={{ fontSize: "18px" }} />
                  </span>
                  {child}
                </ul>
              ))}
            </ul>
            <div className="ceo signature pt-4 d-flex gap-4 align-items-center">
              <img src="/media/signature-dark.svg" alt="" width={80} />
              <div className="ceo-name d-flex flex-column">
                <span className="name tw-bold">Suman Mali</span>
                <span className="text-muted">CEO & Founder</span>
              </div>
            </div>
          </div>
          <div className="col about-img-holder">
            <div className="about-img position-relative">
              <img
                src={image}
                className="position-relative"
                alt=""
                width={550}
                height={450}
                style={{ borderRadius: "15px" }}
              />
              <div className="working-experience d-flex">
                <p>{cardDetail}</p>
                <span className="d-flex align-items-end ">
                  <BsTrophy style={{ color: "#fffcf759", fontSize: "28px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
