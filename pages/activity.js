import React, { useEffect, useState } from 'react';
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
      <div className="d-flex flex-wrap">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activityObj={activity} onUpdate={getAllActivities} />
        ))}
      </div>
    </>
  );
}
