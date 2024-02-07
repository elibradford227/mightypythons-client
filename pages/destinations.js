import React, { useEffect, useState } from 'react';
import { getDestinations } from '../api/destinationData';
import DestCard from '../components/DestCard';
import SearchBar from '../components/SearchBar';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  const getAllDestinations = () => {
    getDestinations().then(setDestinations);
  };

  useEffect(() => {
    getAllDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="input">
        <SearchBar />
      </div>
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
    </>
  );
}
