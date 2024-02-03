import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteDestination } from '../api/destinationData';

function DestCard({ obj, onUpdate }) {
  const deletethisDestination = () => {
    if (window.confirm(`Delete ${obj.name}?`)) {
      deleteDestination(obj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={obj.image} alt={obj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <p>{obj.climate.name}</p>
        <Link href={`/destinations/${obj.id}`} passHref>
          <Button variant="success" className="lg">VIEW</Button>
        </Link>
        <Link href={`/destinations/edit/${obj.id}`} passHref>
          <Button variant="warning" className="lg">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deletethisDestination} className="lg">DELETE</Button>
      </Card.Body>
    </Card>
  );
}

DestCard.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    climate: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DestCard;
