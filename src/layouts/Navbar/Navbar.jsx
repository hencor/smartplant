import React, { useState } from 'react';
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactusForm from '../../components/forms/ContactusForm';
import './Navbar.css';

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <React.Fragment>
      <Navbar variant="light" expand="md" className="shadow-sm">
        <Container className="px-5">
          <Navbar.Brand as={Link} to='/' className="fw-bold">SmartPlant</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" aria-expanded="false">
            Menu
            <i className="bi-list"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive">
            <Nav
              as="ul"
              className="ms-auto me-4 my-3 my-lg-0"
            >
              <Nav.Item as="li">
                <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={Link} to='/login'>Ingresar</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button
              className="rounded-pill px-3 mb-2 mb-lg-0"
              onClick={handleShow}
            >
              <i className="bi-chat-text-fill me-2" />
              <span className="small">Contactenos</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="bg-gradient-primary-to-secondary p-4"
          closeButton
          closeVariant="white"
        >
          <Modal.Title className="font-alt text-white">
            Solicita más información
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactusForm onSubmitParent={handleSubmit} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
