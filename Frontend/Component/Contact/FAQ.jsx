import React, { useState } from "react";
import { BsQuestion } from "react-icons/bs";

const FAQData = [
  {
    id: "1",
    question: "What is the purpose of this website?",
    answer:
      "This website is a website that allows you to create and manage your personal portfolio.Deserunt consequat cupidatat mollit minim incididunt consequat deserunt et. Elit consequat adipisicing nisi sunt esse sit. Cupidatat exercitation occaecat fugiat sit dolor officia nulla amet velit. Officia Lorem anim ut laboris in nisi officia dolore adipisicing anim culpa sint. Fugiat proident eiusmod mollit nostrud in laboris ea nulla id tempor. Aute elit deserunt sunt pariatur ex ea occaecat id qui ipsum culpa. Consequat in ex tempor eiusmod qui cupidatat deserunt.",
  },
  {
    id: "2",
    question: "What is the purpose of this website?",
    answer:
      "This website is a website that allows you to create and manage your personal portfolio.Minim exercitation ex esse occaecat duis veniam sit. Occaecat aliquip cupidatat labore aute qui ut. Fugiat ex tempor deserunt excepteur ad sit anim exercitation deserunt.",
  },
  {
    id: "3",
    question: "What is the purpose of this website?",
    answer:
      "This website is a website that allows you to create and manage your personal portfolio.Nostrud consectetur consequat elit sit magna irure labore tempor nisi dolor anim minim do commodo. Ad nisi dolor sunt officia ut aliqua quis culpa. Laborum esse ut mollit qui duis sit tempor incididunt consectetur non ex Lorem. Anim nulla ut anim nostrud dolor id tempor amet nostrud exercitation nisi veniam ullamco. Pariatur nulla sint ea anim dolore voluptate enim do. Pariatur sint consectetur nostrud aliquip non ex do ex eu minim dolore.",
  },
  {
    id: "4",
    question: "What is the purpose of this website?",
    answer:
      "This website is a website that allows you to create and manage your personal portfolio.Eiusmod proident enim in qui amet quis veniam magna ea. Commodo irure laboris ut consequat mollit reprehenderit culpa aliquip aliquip excepteur duis adipisicing. Officia non labore pariatur labore velit incididunt id ipsum est mollit enim qui. Ullamco cillum exercitation reprehenderit ut aliqua sunt amet.",
  },
];
const FAQ = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState();
  const handleClick = (num) => {
    setVisible(true);
    setOpen(num);
  };

  return (
    <div className="faq-section container-fluid">
      <div className="container">
        <center>
          <div className="row mt-5 pt-5">
            <div className="col-lg-12 pt-5">
              <div className="faq-section-title ">
                <small>Frequently Asked Questions</small>
                <h1 className="fw-bold pt-3">Answer Questions</h1>
                          </div>
                          <div className="d-flex flex-column gap-3 py-3 my-5">
              {FAQData.map((faq) => (
                <div
                  className="faq-holder d-flex flex-column align-items-center "
                  style={{ paddingInline: "9rem" }}
                >
                  <div
                    className={`btn col d-flex  align-items-center gap-5 outline-none  ${
                      faq.id === open ? "active" : ""
                    }`}
                    key={faq.id}
                    onClick={() => handleClick(faq.id)}
                    style={{
                      maxWidth: "55rem",
                     background:"white",
                      padding: "15px 20px",
                    }}
                  >
                    <span className="icon">
                      <BsQuestion className="fs-3 " color="white" />
                    </span>
                    <strong>{faq.question}</strong>
                  </div>
                  <div
                    className={`visible  ${
                      faq.id === open ? "visible" : "hidden"
                    }`}
                  >
                    {open && visible && faq.id === open && (
                      <small>{faq.answer}</small>
                    )}
                  </div>
                </div>
              ))}
                              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default FAQ;
