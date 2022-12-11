import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FincaForm from '../../components/forms/FincaForm';

const list = [
  { id: 1, title: 'Finca 1' },
  { id: 2, title: 'Finca 2' },
];

const Fincas = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => {
    setShow(true);
  };
  const handleSubmit = (e) => {
    // controla editar
    console.log(e);
    closeModal();
  };

  return (
    <Container className="vh-100">
      <Row className='mt-3 text-center'><h1>Fincas</h1></Row>
      {list.map((finca) => {
        return <Item key={finca.id} item={finca} />;
      })}
      <Row className="justify-content-center text-center">
        <Col xs="1" md="2">
          <Button
            className="small rounded-circle border-light" onClick={showModal}
          >
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header
          className="bg-gradient-primary-to-secondary p-4"
          closeButton
          closeVariant="white"
        >
          <Modal.Title className="font-alt text-white">Añadir</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FincaForm onSubmitParent={handleSubmit} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

const Item = ({ item }) => {
  
  const navigate = useNavigate();
  const onClickWorkspaces = () => {
    navigate(`/fincas/${item.id}/espacios`)
  }
  const onClickEdit = () => {

  }
  const onClickDelete = () => {

  }

  return (
    <Row
      className="mb-3 bg-light p-2 text-center align-items-center rounded-3"
    >
      <Col xs={10} md={3}><span>{item.title}</span></Col>
      <Col xs={4} >
        <Button onClick={onClickWorkspaces}>Espacios de trabajo</Button>
      </Col>
      <Col xs={2}>
        <Button>Editar</Button>
      </Col>
      <Col xs={2}>
        <Button>Eliminar</Button>
      </Col>
    </Row>
    
  );
};

export default Fincas;
