import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  registerWithEmailAndPassword,
  connectWithGoogle,
} from "../store/authAction";

function Register(props) {
  // -----------------------------handle submit button-----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmailAndPassword(email, password);
  };
  // -------------------------------end of the methode-----------------
  return (
    <>
      <h1
        style={{
          marginLeft: "10rem",
          color: "lightcoral",
          textDecoration: "underline",
        }}
      >
        Register Now
      </h1>
      <Container
        style={{
          width: "20rem",
          marginTop: "7rem",
          backgroundColor: "lightcoral",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
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
          {/* =================  reagister with google*/}

          <Button onClick={props.connectWithGoogle}>
            <img
              src="https://www.howtogeek.com/wp-content/uploads/2020/10/google-hum.png?trim=1,1&bg-color=000&pad=1,1"
              style={{ width: "7rem" }}
              alt="google"
            />
          </Button>
        </Form>
      </Container>
    </>
  );
}
const mapStateToProps = () => {};

const mapDispatchToProps = {
  registerWithEmailAndPassword,
  connectWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
