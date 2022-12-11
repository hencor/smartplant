import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

const Title = ({ icon, title, center, onClick }) => {
  return (
    <Col className={onClick ? 'btn' : ''} onClick={onClick}>
      <Row className='align-items-center'>
        {icon ? (
          <Col xs="2" md="2" lg="1" className="text-center pe-0">
            <FontAwesomeIcon icon={icon} />
          </Col>
        ) : (
          ''
        )}
        <Col className={center ? '' : 'text-start'}>{title}</Col>
      </Row>
    </Col>
  );
};

export default Title;
