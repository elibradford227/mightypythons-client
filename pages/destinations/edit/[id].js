import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDestination } from '../../../api/destinationData';
import DestForm from '../../../components/forms/DestinationForm';

export default function EditDestination() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleDestination(id).then(setEditItem);
  }, [id]);

  return (<DestForm obj={editItem} />);
}
