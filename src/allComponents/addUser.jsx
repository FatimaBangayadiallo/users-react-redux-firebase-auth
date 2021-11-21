import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AddNewUser } from "../actions/action";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }
  // ------------------------------------handleChange-event Handler------------------
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("je suis ", this.state);
  };
  // --------------------------------------end//////////////////////////////------------
  // --------------------------------------the handle submit --------------------------
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddNewUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    console.log("form submited", this.state);
  };
  render() {
    return (
      <>
        <h1>ADD users </h1>
        <Form onSubmit={this.handleSubmit}>
          {/* name input */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name </Form.Label>
            <Form.Control
              type="txt"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/*  email input */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* gen input */}
          <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              name="gen"
              placeholder="Gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* the submit button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
const mapDispatchToProps = {
  AddNewUser,
};
export default connect(null, mapDispatchToProps)(Add);
