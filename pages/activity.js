import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import { getActivities } from '../api/activityData';
import ActivityCard from '../components/ActivitiyCard';

export default function Activity() {
  const [activities, setActivities] = useState([]);

  const getAllActivities = () => {
    getActivities().then(setActivities);
  };
  useEffect(() => {
    getAllActivities();
  }, []);
  return (
    <>
      <Head>
        <title>Activity</title>
      </Head>
      <div className="text-center my-4">
        <Link href="/activity/new" passHref>
          <Button>Add Activity</Button>
        </Link>
      </div>
      <div style={{ margin: '20px' }} className="d-flex flex-wrap">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activityObj={activity} onUpdate={getAllActivities} />
        ))}
      </div>
    </>
  );
}
