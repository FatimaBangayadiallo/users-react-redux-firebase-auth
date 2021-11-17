import logo from "./logo.svg";
import "./App.css";
import React from "react";
import DisplayUsers from "./allComponents/displayUsers";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./allComponents/addUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUsers: [
        {
          name: "Bah",
          email: "Bah@gmail.com",
          gen: 2,
        },
        {
          name: "Sow",
          email: "Sow@gmail.com",
          gen: 12,
        },
        {
          name: "diallo",
          email: "diallo@gmail.com",
          gen: 19,
        },
        {
          name: "barry",
          email: "barry@gmail.com",
          gen: 18,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Container
          style={{ backgroundColor: "lightblue", marginTop: "2rem" }}
          fluid
        >
          <Row>
            <Col>
              <Add />
            </Col>
            <Col>
              <DisplayUsers data={this.state.authUsers} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
