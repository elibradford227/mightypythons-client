import React from 'react';
import PropTypes from 'prop-types';

function ActivityCard({ activityObj }) {
  return (
    <div className="activityCard">
      <div className="first-content">
        <span>{activityObj.name}</span>
      </div>
      <div className="second-content">
        <span>{activityObj.bio}</span>
      </div>
    </div>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ActivityCard;
