import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ title = '', image = '', onClick }) {
  const minutes = Math.floor(Math.random() * 3) + 1;

  const [[mins, secs], setTime] = useState([minutes, 0]);

  const [disabled, setDisabled] = useState(false);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      setDisabled(true);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

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
          <Card.Text>{`${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`}</Card.Text>
          <Button variant="dark" onClick={onClick} disabled={disabled}>
            Go to detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
