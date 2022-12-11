import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Title from '../../components/ui/Title';
import Item from '../../components/ui/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import WorkspaceForm from '../forms/WorkspaceForm';
import DevicesForm from '../forms/DevicesForm';

const Page = ({ elements, type, title }) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => {
    setShow(true);
  };
  const handleSubmit = (data) => {
    // controla añadir
    closeModal();
  };
  return (
    <Container className="px-3 pt-3 pb-5 px-md-5">
      <Row className="justify-content-center text-center">
        <Title title={<h3>{title}</h3>} center={true} />
      </Row>
      {elements.map((element) => {
        return <Item key={element.id} element={element} type={type} />;
      })}
      <Row className="justify-content-center text-center">
        <Col xs="1" md="2">
          <Button
            className="small rounded-circle border-light"
            onClick={showModal}
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
          {type === WorkspaceForm.name ? (
            <WorkspaceForm onSubmitParent={handleSubmit} />
          ) : type === DevicesForm.name ? (
            <DevicesForm onSubmitParent={handleSubmit} />
          ) : (
            ''
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Page;
