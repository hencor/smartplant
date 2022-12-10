import { Button, Col, Container, Row } from 'react-bootstrap';

const list = [
  { id: 1, title: 'Finca 1' },
  { id: 2, title: 'Finca 2' },
];

const Fincas = () => {
  let renderList = list.map((finca) => {
    return (
      <Row
        key={finca.id}
        className="mt-3 bg-light p-2 align-items-center rounded-3"
      >
        <Col>{finca.id}</Col>
        <Col>{finca.title}</Col>
        <Col>
          <Button>Administrar</Button>
        </Col>
        <Col>
          <Button>Editar</Button>
        </Col>
        <Col>
          <Button className="bg-danger">Eliminar</Button>
        </Col>
      </Row>
    );
  });

  return (
    <Container className="vh-100">
      {renderList}
      <Button
        className="position-absolute bottom-0 end-0 translate-middle rounded-pill"
        style={{ width: '4rem', height: '4rem' }}
      >
        <i className="fa fa-add">Add</i>
      </Button>
    </Container>
  );
};

export default Fincas;
