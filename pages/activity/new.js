import React from 'react';
import ActivityForm from '../../components/forms/ActivityForm';

export default function AddActivity() {
  return (
    <div className="cardContainer">
      <div className="cardForm">
        <div className="circle" />
        <div className="circle" />
        <div className="card-inner">
          <ActivityForm />
        </div>
      </div>
    </div>

  // <ActivityForm />
  );
}
