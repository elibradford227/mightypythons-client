import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function ActivityCard({ activityObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{activityObj.name}</Card.Title>
        <Link href={`/activity/${activityObj.id}`} passHref>
          <Button variant="success" className="lg">VIEW</Button>
        </Link>
        <Link href={`/activity/edit/${activityObj.id}`} passHref>
          <Button variant="warning" className="lg">EDIT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ActivityCard;
