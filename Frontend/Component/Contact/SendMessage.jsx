import { postEnquiry } from "@/Redux/Service/enquiry";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  emailAddress: "",
  phoneNo: "",
  subject: "",
  message: ""
}

const SendMessage = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, emailAddress, phoneNo, subject, message } = formData;
  const submitHandler = async (e) => { 
    e.preventDefault();
    const enquiryData = { name, emailAddress, phoneNo, subject, message };
    if (!name || !emailAddress || !phoneNo  || !message) { 
      return toast.error("All Fields are required");
    }
    try {
      await postEnquiry(enquiryData);
      toast.success("Message Sent Successfully");
    } catch (error) {
    }
    
  }
  const handleInput = (e) => { 
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div
    className="d-flex"
    style={{ background: "white", width: "fit-content" }}
  >
    <form style={{ lineHeight: "66px", padding: "40px" }}  onSubmit={submitHandler}>
      <h3 className="fw-bold">Connect With Us</h3>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <input
          type="name"
          id="name"
            placeholder="Your Full Name*"
            name="name"
            value={name}
            
            onChange={handleInput}
            
        />
      </div>
      <div className="email-number d-flex gap-4">
        <div className="d-flex flex-column col-lg-6 col-md-6">
          <input
            type="text"
            id="email"
              placeholder="Your Email address*"
              name="emailAddress"
              value={emailAddress}
              
              onChange={handleInput}
          />
        </div>
        <div className="d-flex flex-column col-lg-5 col-md-5">
          <input
            type="text"
            id="number"
              placeholder="Your Number*"
              name="phoneNo"
              value={phoneNo}
              onChange={handleInput}
              
          />
        </div>
      </div>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <input
          type="text"
          id="subject"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={handleInput}
        />
      </div>
      <div className="d-flex flex-column col-lg-12 col-md-12">
        <textarea
          type="text"
          id="message"
            placeholder="Message*"
            name="message"
            value={message}
            onChange={handleInput}
          
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