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

  const { id } = router.query;

  useEffect(() => {
    viewDestinationDetails(id).then(setDestinationDetails);
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-start">
            <img src={destinationDetails.image} alt={destinationDetails.name} style={{ width: '100%', maxWidth: '300px' }} />
          </div>
        </div>
        <div className="col-md-8">
          <Card style={{ width: '100%', margin: '10px', background: 'linear-gradient(to right, lightblue, lightgreen, yellow)' }}>
            <Card.Body>
              <div className="text-black details text-center">
                <h1 style={{ fontFamily: 'Arial', fontSize: '50px', fontStyle: 'italic' }}>
                  ✈ Experience {destinationDetails.name}! ✈
                  {destinationDetails.favorite ? '❤️' : ''}
                </h1>
                <hr />
                <p>{destinationDetails.bio || ''}</p>
                <hr />
                <p>Expect a {destinationDetails.climate?.name} atmosphere!</p>
              </div>

              {/* modal */}
              <ActivityMenu destinationId={destinationDetails.id} show={modalShow} onHide={() => setModalShow(false)} />
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 text-center">
          <h2>ACTIVITIES</h2>
        </div>
      </div>
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
