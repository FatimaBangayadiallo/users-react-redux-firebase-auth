import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const User = (props) => {
  return (
    <>
      {/* premiere partie de la carte */}
      <Col md="3">
        <Card
          style={{
            marginBottom: "2rem",
            backgroundColor: "lightslategrey",
          }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              all the informtaion about a user
            </Card.Subtitle>
            <Card.Title>name: {props.itemInfo.name}</Card.Title>

            <Card.Text>
              <p>email: {props.itemInfo.email}</p>
              <p>gen:{props.itemInfo.gen}</p>
            </Card.Text>
            <Button variant="primary" size="sm">
              edit
            </Button>
            <Button variant="danger" size="sm" style={{ marginLeft: "2rem" }}>
              delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
      {/* end of the partie */}
    </>
  );
};
export default User;
