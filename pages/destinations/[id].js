/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import viewDestinationDetails from '../../api/mergedData';

export default function ViewDestination() {
  const [destinationDetails, setDestinationDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    viewDestinationDetails(id).then(setDestinationDetails);
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-start">
            <img src={destinationDetails.image} alt={destinationDetails.name} style={{ width: '100%', maxWidth: '300px' }} />
          </div>
        </div>
        <div className="col-md-8">
          <Card style={{ width: '100%', margin: '10px' }}>
            <Card.Body>
              <div className="text-black details text-center">
                <h1>
                  &#127881; Experience {destinationDetails.name}! &#127881;
                  {destinationDetails.favorite ? '🤍' : ''}
                </h1>
                <hr />
                <p>{destinationDetails.bio || ''}</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 text-center">
          <h2>ACTIVITIES CARDS GO HERE</h2>
        </div>
      </div>
    </div>
  );
}
