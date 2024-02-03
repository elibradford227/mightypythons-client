import React from 'react';
import DestinationForm from '../../components/forms/DestinationForm';

export default function AddDestination() {
  return (
    <div className="cardContainer">
      <div className="cardForm">
        <div className="circle" />
        <div className="circle" />
        <div className="card-inner">
          <DestinationForm />
        </div>
      </div>
    </div>

  );
}
