import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDestination } from '../../../api/destinationData';
import DestinationsForm from '../../../components/forms/DestinationForm';

export default function EditDestination() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleDestination(id).then(setEditItem);
  }, [id]);

  return (
    <div className="cardContainer">
      <div className="cardForm">
        <div className="circle" />
        <div className="circle" />
        <div className="card-inner">
          <DestinationsForm obj={editItem} />
        </div>
      </div>
    </div>

  );
}
