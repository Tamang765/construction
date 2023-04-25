import React from "react";


const QuoteBy = () => {

  return (
    <div className="quoteby container-fluid p-0 mt-5">
      <div className="d-flex">
        <div
          className="line p-0"
          style={{ width: "10px", height: "24vh", background: "orangered" }}
        ></div>
        <div className="container pt-5 px-4">
          <div className="row">
            <figure>
              <div class="blockquote">
                <span style={{ fontSize: "13px",fontStyle:"italic" }}>
                  Fugiat deserunt veniam ipsum sunt nisi eu non commodo
                  reprehenderit nostrud laborum nisi voluptate voluptate. Culpa
                  aliquip qui sint mollit sit do proident commodo ex quis do
                  excepteur. Labore in nisi Lorem consectetur aliqua laborum. Eu
                  consectetur ea aliquip irure consectetur do.
                </span>
              </div>
              <div class="blockquote-footer">
                <cite title="Surz Don">Suraz Don</cite>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBy;
