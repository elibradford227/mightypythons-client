import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import { getDestinations } from '../api/destinationData';
import DestCard from '../components/DestCard';

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
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Link passHref href="/destinations/new">
            <Button>Create A New Destination</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
