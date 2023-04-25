import { Registerservice } from "@/Redux/Service/authServices";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [formdata, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formdata;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = { name, email, password, confirmPassword };
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Your password must be higher than 8 digits");
    }
    if (password !== confirmPassword) {
      return toast.error("Password must Match");
    }
    try {
      await Registerservice(userdata);
      console.log({ ...formdata });
      toast.success("Sucessfully registered")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register container-fluid">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Form onSubmit={handleSubmit} className="register-form">
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter full name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>

            <label htmlFor="email">Email</label>
            <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} value={email}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" enter password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat  Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 pt-3">
              <button
                type="submit"
                className="px-5 py-2 text-white"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "orangered",
                  border: "none",
                }}
              >
                submit
              </button>
              <Link href="/Login">Already have an account?</Link>
              <Link href="/forgot">Forgot password?</Link>
              <Link href="/reset">Reset password?</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
