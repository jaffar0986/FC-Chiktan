import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import image from '../assets/uploads/image.jpg';

const Squad = () => {
  return (
    <Col> {/* Wrap in a Col for layout */}
      <Card style={{ maxWidth: '1000px', backgroundColor: '#F8F8FF'}}>
        <Card.Body >
            <Row className="align-items-center justify-content-center">
              <Col xs={6} className="text-center">
                <div > {/* Add margin to separate the text */}
                  <Card.Title>Shah Jaffar</Card.Title> {/* Title */}
                  <Card.Text>
                    <p>Position: Forward</p> {/* Text content */}
                    <p>Club: Club</p>
                    <p>Games Played:   12</p>
                    <p>Games Played:   12</p>
                    <p>Games Played:   12</p>
                    <p>Games Played:   12</p>
                  </Card.Text>
                </div>
              </Col>
              <Col xs={6}> {/* Image column */}
                <Card.Img variant="top" src={image} alt="Title" style={{height: '500px'}} /> {/* Image */}
              </Col>
            </Row>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Squad;
