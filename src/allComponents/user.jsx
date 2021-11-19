import { logRoles } from "@testing-library/dom";
import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import Edit from "./editUser";

const User = (props) => {
  // ---------------------------------------------------------the define the state------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ---------------------------------------
  // ------------------the handelete event handler------------------------------
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.itemInfo.id);
    console.log("item deleted");
  };
  return (
    <>
      {/* --------------------------le modal---------------------------------------------------------------------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit
            itemInfo={props.itemInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      {/* ----------------------------------------end/of the modal---------------------------------------------------- */}
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
            <Button variant="primary" size="sm" onClick={handleShow}>
              edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              style={{ marginLeft: "2rem" }}
              onClick={handleDelete}
            >
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
