import React, { useEffect, useState } from 'react';
import { getDestinations } from '../api/destinationData';
import DestCard from '../components/DestCard';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  const getAllDestinations = () => {
    getDestinations().then(setDestinations);
  };

  console.warn(destinations);

  useEffect(() => {
    getAllDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {destinations.map((dest) => (
        <div>
          <DestCard
            key={`dest--${dest.id}`}
            obj={dest}
          />
        </div>
      ))}
    </div>
  );
}
