import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginWithEmailAndPassword } from "../store/authAction";
import { connectWithGoogle } from "../store/authAction";

const Login = (props) => {
  if (!props.auth.isEmpty) {
    return <Redirect to="/" />;
  }
  // -----------------------------handle submit button-----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.loginWithEmailAndPassword(email, password);
  };
  // -------------------------------end of the methode-----------------
  return (
    <>
      <h1
        style={{
          marginLeft: "10rem",
          color: "lightgray",
          textDecoration: "underline",
        }}
      >
        Login If Existing
      </h1>

      <Container
        style={{
          width: "20rem",
          marginTop: "7rem",
          backgroundColor: "lightcyan",
        }}
      >
        <Col md="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md="4">
          <br />
          <p>/connect with google</p>
          <Button onClick={props.connectWithGoogle}>
            <img
              src="https://www.howtogeek.com/wp-content/uploads/2020/10/google-hum.png?trim=1,1&bg-color=000&pad=1,1"
              style={{ width: "7rem" }}
              alt="google image"
            />
          </Button>
        </Col>
      </Container>
      <Link to="/register">Go To Register </Link>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = {
  loginWithEmailAndPassword,
  connectWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
