import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DevicesForm from '../forms/DevicesForm';
import WorkspaceForm from '../forms/WorkspaceForm';
import Title from './Title';

const Item = ({ type, element }) => {
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

  const navigate = useNavigate();

  const onClickItem = () => {
    switch (type) {
      case 'FincaForm':
        navigate(`${element.id}/espacios`);
        break;
      case 'WorkspaceForm':
        navigate(`${element.id}/dispositivos`);
        break;
      case 'DeviceForm':
        navigate(`${element.id}/escenas`);
        break;
      default:
        break;
    }
  };

  return (
    <Row className="h5 mt-3 justify-content-center">
      <Col xs="10" md="8">
        <Row className="align-items-center">
          <Title
            icon={element.icon}
            title={element.name}
            onClick={onClickItem}
          />
          <Col xs="2" md="2" className="text-center">
            <Button
              className="small border-0 bg-white text-primary"
              onClick={showModal}
            >
              <i className="bi bi-pencil-square" />
            </Button>
          </Col>
          <Col xs="2" md="2" className="text-center">
            <Button className="small border-0 bg-white text-danger">
              <i className="bi bi-trash-fill" />
            </Button>
          </Col>
        </Row>
      </Col>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header
          className="bg-gradient-primary-to-secondary p-4"
          closeButton
          closeVariant="white"
        >
          <Modal.Title className="font-alt text-white">Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === WorkspaceForm.name ? (
            <WorkspaceForm onSubmitParent={handleSubmit} />
          ) : type === DevicesForm.name ? (
            <DevicesForm onSubmitParent={handleSubmit} />
          ) : (
            ''
          )}
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default Item;
