import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteDestination } from '../api/destinationData';

function DestCard({ destObj, onUpdate }) {
  const deletethisDestination = () => {
    if (window.confirm(`Delete ${destObj.name}?`)) {
      deleteDestination(destObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={destObj.image} alt={destObj.location} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{destObj.name}</Card.Title>
        <p>{destObj.climate}</p>
        <Link href={`/destinations/${destObj.id}`} passHref>
          <Button variant="success" className="lg">VIEW</Button>
        </Link>
        <Link href={`/destinations/edit/${destObj.id}`} passHref>
          <Button variant="warning" className="lg">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deletethisDestination} className="lg">DELETE</Button>
      </Card.Body>
    </Card>
  );
}

DestCard.propTypes = {
  destObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    climate: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DestCard;
