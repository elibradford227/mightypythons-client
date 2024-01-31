import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteActivity } from '../api/activityData';

function ActivityCard({ activityObj, onUpdate }) {
  const deletethisActivity = () => {
    if (window.confirm(`Delete ${activityObj.name}?`)) {
      deleteActivity(activityObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={activityObj.name} />
      <Card.Body>
        <Card.Title>{activityObj.name}</Card.Title>
        <p>{activityObj.destination}</p>
        <Link href={`/activity/${activityObj.firebaseKey}`} passHref>
          <Button variant="success" className="lg">VIEW</Button>
        </Link>
        <Link href={`/activity/edit/${activityObj.firebaseKey}`} passHref>
          <Button variant="warning" className="lg">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deletethisActivity} className="lg">DELETE</Button>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    name: PropTypes.string,
    destination: PropTypes.string,
    description: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ActivityCard;
