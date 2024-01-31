import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getActivities } from '../api/activityData';
import ActivityCard from '../components/ActivitiyCard';

export default function Activity() {
  const [activities, setActivities] = useState([]);
  const { user } = useAuth();

  const getAllActivities = () => {
    getActivities(user.uid).then(setActivities);
  };
  useEffect(() => {
    getAllActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <div className="d-flex flex-wrap">
        {activities.map((activity) => (
          <ActivityCard key={activity.firebaseKey} activityObj={activity} onUpdate={getAllActivities} />
        ))}
      </div>
    </>
  );
}
