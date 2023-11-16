import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const PageCard1 = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col >
            <Card style={{width:"350px", height:"600px"}} >
              <Card.Img src={dataMain.img} style={{width:"100%", height:"350px"}} />
              <Card.Body>
                <Card.Title>{dataMain.name}</Card.Title>
                <Card.Text>{dataMain.designation}</Card.Text>
                <Card.Text>{dataMain.quotes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PageCard1;