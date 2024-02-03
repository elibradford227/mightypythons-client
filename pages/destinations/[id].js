/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import viewDestinationDetails from '../../api/mergedData';

export default function ViewDestination() {
  const [destinationDetails, setDestinationDetails] = useState({});
  const router = useRouter();

  // TODO: grab id from url
  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewDestinationDetails(id).then(setDestinationDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap text-black">
      <div className="d-flex flex-column">
        <img src={destinationDetails.image} alt={destinationDetails.name} style={{ width: '300px' }} />
      </div>
      <Card style={{ width: '60%', margin: '10px' }}>
        <Card.Body>
          <div className="text-black ms-5 details">
            <h1>
              &#127881; Experience {destinationDetails.name}! &#127881;
              {destinationDetails.favorite ? '🤍' : ''}
            </h1> <hr />
            <p>{destinationDetails.bio || ''}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
