import React from "react";
import User from "./user";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
const DisplayUsers = (props) => {
  return (
    <>
      <Container>
        <Row>
          <h1> Display users</h1>
          {props.authUsers.map((item) => {
            return (
              <User
                itemInfo={item}
                key={item.id}
                deleteUser={props.deleteUser}
                editUser={props.editUser}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    authUsers: state.authUsers,
  };
};
export default connect(mapStateToProps)(DisplayUsers);
