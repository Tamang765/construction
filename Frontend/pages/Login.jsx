import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";



const initialState = {
  email: "",
  password:""
}
const Login = () => {
  const [logindata, setLoginData] = useState(initialState);
  const { email, password } = logindata;
  const handleChange = (e) => { 
    const { name, value } = e.target;

    setLoginData({ ...logindata, [name]: value })
    
  }
  const handleSubmit =async(e) => { 
    e.preventDefault();
    if (!email || !password) { 
      return toast.error("All fields are required")
    }
  }
  return (
    <div className="container-fluid ">
      <div className="container">
        <center className="login">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-25"
                value={email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
              
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className="w-25"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </center>
      </div>
    </div>
  );
};
export default Login;
