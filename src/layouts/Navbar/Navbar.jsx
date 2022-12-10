import React, { useState } from 'react';
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <Form>
            <Form.Group className="form-floating mb-3">
              <Form.Control type="text" id="name" placeholder="Name" />
              <Form.Label for="name">Nombre</Form.Label>
              <div className="invalid-feedback">Invalid</div>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control type="email" placeholder="Email" />
              <Form.Label>Correo</Form.Label>
              <div className="invalid-feedback">Invalid</div>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control type="tel" placeholder="Phone" />
              <Form.Label>Telefono</Form.Label>
              <div className="invalid-feedback">Invalid</div>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control as="textarea" rows={6} placeholder="Message" />
              <Form.Label>Mensaje</Form.Label>
              <div className="invalid-feedback">Invalid</div>
            </Form.Group>
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            <div className="d-grid">
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <Button
                className="rounded-pill btn-lg disabled"
                type="submit"
                id="submitButton"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
