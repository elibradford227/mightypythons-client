/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import ActivityCard from '../../components/ActivitiyCard';
import viewDestinationDetails from '../../api/mergedData';
import ActivityMenu from '../../components/ActivityMenu';

export default function ViewDestination() {
  const [destinationDetails, setDestinationDetails] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [activities, setActivities] = useState([]);
  const router = useRouter();

  setTimeout(() => {
    setActivities(destinationDetails.dest_activities);
  }, 1);

  // TODO: grab id from url
  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewDestinationDetails(id).then(setDestinationDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap text-black">
      <div className="d-flex flex-column">
        <img src={destinationDetails.image} alt={destinationDetails.name} style={{ width: '300px' }} />
      </div>
      <Card style={{ width: '60%', margin: '10px' }}>
        <Card.Body>
          <div className="text-black ms-5 details">
            <h1>
              &#127881; Experience {destinationDetails.name}! &#127881;
              {destinationDetails.favorite ? '🤍' : ''}
            </h1> <hr />
            <p>{destinationDetails.bio || ''}</p>
          </div>

          {/* modal */}
          <ActivityMenu destinationId={destinationDetails.id} show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '20px',
      }}
      >
        {activities?.map((act) => (
          <div key={`item--${act.id}`} className="item">
            <ActivityCard
              activityObj={act}
              // destinationDetails={destinationDetails}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
