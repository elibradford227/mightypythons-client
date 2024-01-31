import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getDestinations } from '../api/destinationData';
import DestCard from '../components/DestCard';

export default function Destination() {
  const [destinations, setDestinations] = useState([]);
  const { user } = useAuth();

  const getAllDestinations = () => {
    getDestinations(user.uid).then(setDestinations);
  };
  useEffect(() => {
    getAllDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <div className="d-flex flex-wrap">
        {destinations.map((destination) => (
          <DestCard key={destination.firebaseKey} destinationObj={destination} onUpdate={getAllDestinations} />
        ))}
      </div>
    </>
  );
}
