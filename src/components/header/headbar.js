import React from 'react'; 
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Headbar = ({}) => {
  return (
    <Row>
      <Col lg={12} sm={12} xs={12} md={12} xl={12} >
        <h3>Users Crud</h3>
      </Col>
    </Row>
  )
}

export default Headbar