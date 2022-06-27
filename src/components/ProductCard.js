import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ title = '', image = '', onClick }) {
  return (
    <>
      <Card
        className="align-self-stretch mt-3"
        style={{ width: '400px', height: '300 px' }}
      >
        <Card.Img
          style={{ objectFit: 'contain', marginTop: '10px', height: '100px' }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Text></Card.Text>
          <Button variant="primary" onClick={onClick}>
            Go to detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
