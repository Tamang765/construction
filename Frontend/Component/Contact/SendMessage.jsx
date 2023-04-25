
const SendMessage = () => {
  return (
    <div
    className="d-flex"
    style={{ background: "white", width: "fit-content" }}
  >
    <form style={{ lineHeight: "66px", padding: "40px" }} novalidate>
      <h3 className="fw-bold">Connect With Us</h3>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <input
          type="text"
          id="name"
          placeholder="Your Full Name*"
          required
        />
      </div>
      <div className="email-number d-flex gap-4">
        <div className="d-flex flex-column col-lg-6 col-md-6">
          <input
            type="text"
            id="email"
            placeholder="Your Email address*"
            required
          />
        </div>
        <div className="d-flex flex-column col-lg-5 col-md-5">
          <input
            type="text"
            id="number"
            placeholder="Your Number*"
            required
          />
        </div>
      </div>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <input
          type="text"
          id="subject"
          placeholder="Subject*"
          required
        />
      </div>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <textarea
          type="text"
          id="message"
          placeholder="Message*"
          required
        />
      </div>
      <div className="col-12">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
  )
}

export default SendMessage