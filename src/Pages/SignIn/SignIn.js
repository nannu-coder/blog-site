import React from "react";
import "./SignIn.css";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import axios from "axios";

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      email: data.get("Email"),
      password: data.get("password"),
    };

    event.target.reset();

    axios.post("http://localhost:5000/signin", formData, {
      withCredentials: true,
    });
  };

  axios.get("http://localhost:5000/signin", { withCredentials: true });

  return (
    <div>
      <div className="container">
        <div className="input-form text-center">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="title">
                <h1 className="mb-4">Please Sign In</h1>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="Email"
                      name="Email"
                      placeholder="Your Email"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Your password"
                    />
                  </Col>
                </Form.Group>
                <Button type="submit" style={{ marginTop: "40px" }}>
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
