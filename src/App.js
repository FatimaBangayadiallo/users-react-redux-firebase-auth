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
          id: "458734732sgdfdjk132423",
        },

        {
          name: "diallo",
          email: "diallo@gmail.com",
          gen: 19,
          id: "12233shghdfjksdjsjas098",
        },
      ],
    };
  }
  // all the actions-------------------------
  // --------------------add new user-----------------------
  AddNewUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      authUsers: [...this.state.authUsers, newUser],
    });
  };
  // ----------------------------------the methode to delete a particular item---------------------
  deleteUser = (id) => {
    let undeletedUsersAuht = this.state.authUsers.filter(
      (item) => item.id !== id
    );
    this.setState({
      authUsers: undeletedUsersAuht,
    });
  };
  render() {
    return (
      <>
        <Container
          style={{ backgroundColor: "lightblue", marginTop: "2rem" }}
          fluid
        >
          <Row>
            <Col md="4">
              <Add AddNewUser={this.AddNewUser} />
            </Col>
            <Col>
              <DisplayUsers
                data={this.state.authUsers}
                deleteUser={this.deleteUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
