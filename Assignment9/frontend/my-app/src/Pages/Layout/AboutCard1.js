import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";


const AboutCard1 = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col >
            <Card style={{width:"350px", height:"600px", padding:"10px" , margin:"20px", color:"black"}} >
              <Card.Img src={dataMain.img} style={{width:"100%", height:"350px"}}/>
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

export default AboutCard1;