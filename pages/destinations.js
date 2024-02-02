import React, { useEffect, useState } from 'react';
import { getDestinations } from '../api/destinationData';
import DestCard from '../components/DestCard';

export default function Destinations() {
  const [destinations, setDestinations] = useState({});

  const getAllDestinations = () => {
    getDestinations().then(setDestinations);
  };

  useEffect(() => {
    getAllDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {destinations.map((destination) => (
          <DestCard key={destination.id} destObj={destination} onUpdate={getAllDestinations} />
        ))}
      </div>
    </>
  );
}
