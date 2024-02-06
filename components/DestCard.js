import React from 'react';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { deleteDestination } from '../api/destinationData';

function DestCard({ obj }) {
  // const router = useRouter();

  const deletethisDestination = () => {
    if (window.confirm(`Delete ${obj.name}?`)) {
      deleteDestination(obj.id).then(() => {
        window.location.reload();
      });
    }
  };
  return (
    <>
      <div className="destCard">
        <div className="destAlign">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>

        <h1>{obj.name}</h1>
        <p>
          {obj.climate.name}
        </p>
        <p>
          {obj.favorite}
        </p>
        <Link href={`/destinations/${obj.id}`} passHref>
          <button type="button" className="btn">View</button>
          {/* <Button variant="warning" className="lg">View</Button> */}
        </Link>
        <br />
        <Link href={`/destinations/edit/${obj.id}`} passHref>
          <button type="button" className="btn">Edit</button>
          {/* <Button variant="warning" className="lg">EDIT</Button> */}
        </Link>
        <br />
        <button type="button" className="btn" onClick={deletethisDestination}>Delete</button>
      </div>
    </>
  );
}

DestCard.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    climate: PropTypes.string,
    favorite: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default DestCard;
