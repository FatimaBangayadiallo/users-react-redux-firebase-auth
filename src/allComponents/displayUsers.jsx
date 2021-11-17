import React from "react";
import User from "./user";
import { Container, Row } from "react-bootstrap";
const DisplayUsers = (props) => {
  return (
    <>
      <Container>
        <Row>
          <h1> Display users</h1>
          {props.data.map((item, index) => {
            return <User itemInfo={item} key={index} />;
          })}
        </Row>
      </Container>
    </>
  );
};
export default DisplayUsers;
