import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const JobsCard3 = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col key={k} xs={12} md={4} lg={4}>
            <Card style={{color: "black", width:"400px", height:"450px"}}>
              <Card.Img src={dataMain.img} style={{width:"100%", height:"350px"}}/>
              <Card.Body >
                <Card.Title>{dataMain.name}</Card.Title>
                <Card.Text>{dataMain.domain}</Card.Text>
                <button type="button" class="btn btn-outline-secondary ">Apply</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default JobsCard3;