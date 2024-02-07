import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import DestCard from '../../components/DestCard';
import { getDestinations } from '../../api/destinationData';

export default function SearchPage() {
  const [searchDest, setSearchDest] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchResult } = router.query;

  const searchAllDest = useCallback(() => {
    getDestinations(user.uid).then((dests) => {
      const filteredDests = dests.filter((dest) => dest.name.toLowerCase().match(searchResult));
      setSearchDest(filteredDests);
    });
  }, [searchResult, user.uid]);

  useEffect(() => {
    searchAllDest();
    return () => {
      setSearchDest([]);
    };
  }, [searchAllDest, searchResult]);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/destinations" passHref>
          <Button>View All Destinations</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {searchDest.map((dest) => <DestCard key={dest.id} obj={dest} onUpdate={searchAllDest} />)}
      </div>
    </>

  );
}
