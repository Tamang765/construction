const Reply = () => {
  return (
    <div className="reply container-fluid my-5 py-4">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h3 className="fw-bold">Leave a Reply</h3>
              <form
                className="reply-form d-flex flex-wrap gap-3  pt-4"
                novalidate
              >
                <div className="col-md-5">
                  <div className="form-group d-grid ">
                    <input type="text" required placeholder="Name*" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group d-grid">
                    <input type="text" required placeholder="Surname*" />
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="form-group d-grid">
                    <input type="email" required placeholder="Email*" />
                  </div>
                </div>
                <div className="form-group d-grid">
                  <textarea
                    className="form-control"
                    rows="3"
                    cols="70"
                    placeholder="Your Comment*"
                    required
                  ></textarea>
                  <div className="form-group py-4">
                    <button
                      type="submit"
                      style={{
                        background: "orangered",
                        border: "none",
                        padding: "10px",
                        color: "white",
                        borderRadius: "20px",
                      }}
                    >
                      Send Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
