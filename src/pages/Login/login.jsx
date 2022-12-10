import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Login = (props) => {
  const { children } = props;
  return (
    <section>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start bg-light">
        <Container>
          <Row className="align-items-center gx-lg-5">
            <Col lg={6} className="">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                fluid
                alt="img"
              />
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Body className="py-5 px-md-5">{children}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Login;
