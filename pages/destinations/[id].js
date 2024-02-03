/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
      <div className="text-black ms-5 details">
        <h1>
          Experience {destinationDetails.name}!
          {destinationDetails.favorite ? ' 🤍' : ''}
        </h1>
        <p>{destinationDetails.bio || ''}</p>
        <hr />
        <p>
          {destinationDetails.favorite}
        </p>
      </div>
    </div>
  );
}
