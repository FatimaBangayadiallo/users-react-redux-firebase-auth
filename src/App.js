import "./App.css";
import React from "react";
import DisplayUsers from "./allComponents/displayUsers";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./allComponents/addUser";
import { getAllAuthUsers } from "./actions/action";
import { connect } from "react-redux";
import { logOut } from "./store/authAction";
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);
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
  // AddNewUser = (newUser) => {
  //   newUser.id = Math.random().toString();
  //   this.setState({
  //     authUsers: [...this.state.authUsers, newUser],
  //   });
  // };
  // ----------------------------------the methode to delete a particular item---------------------
  // deleteUser = (id) => {
  //   let undeletedUsersAuht = this.state.authUsers.filter(
  //     (item) => item.id !== id
  //   );
  //   this.setState({
  //     authUsers: undeletedUsersAuht,
  //   });
  // };
  // ----------------------------------------------the methode to update a particular user---------------------
  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     authUsers: this.state.authUsers.map((item) =>
  //       item.id === id ? updatedUser : item
  //     ),
  //   });
  // };
  componentDidMount() {
    this.props.getAllAuthUsers();
  }
  render() {
    return (
      <>
        <h1 style={{ color: "lightcoral", textDecoration: "underline" }}>
          the react redux firebase firestore authentification project
        </h1>
        <Button syle={{ marginTop: "5rem" }} onClick={this.props.logOut}>
          log out
        </Button>

        <Container
          style={{ backgroundColor: "lightblue", marginTop: "4rem" }}
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
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  getAllAuthUsers,
  logOut,
};

export default connect(null, mapDispatchToProps)(App);
