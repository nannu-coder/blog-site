import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let formData = {
      userName: data.get("userName"),
      Phone: data.get("Phone"),
      Email: data.get("Email"),
      Password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    event.target.reset();

    axios.post("http://localhost:5000/signup", formData)
      .then((res) => {
        setError(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="input-form text-center">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  User Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="User Name"
                  />
                </Col>
              </Form.Group>
            {error.userName && <p>{error.userName}</p>}

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="number"
                    name="Phone"
                    placeholder="Your Number"
                  />
                </Col>
              </Form.Group>

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

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Confirm Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Your password"
                  />
                </Col>
              </Form.Group>
              <Button type="submit" style={{ marginTop: "40px" }}>
                SignUp
              </Button>
              <div className="signUp">
                <Link to="/signin">
                  Already Have an Account? please Sign in
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
