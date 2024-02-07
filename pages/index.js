/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <div> <img
        src={user.fbUser.photoURL}
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
        }}
        alt="profile avatar"
      />
      </div>
      <br />
      <div className="scroll-snap-card">
        <div className="slide homeRed">
          <Link passHref href="/destinations">
            <Nav.Link>View Destinations</Nav.Link>
          </Link>
        </div>
        <div className="slide homeBlue">
          <Link passHref href="/destinations/new">
            <Nav.Link>Create Destinations</Nav.Link>
          </Link>
        </div>
        <div className="slide homeGreen">
          <Link passHref href="/activity">
            <Nav.Link>View Activities</Nav.Link>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
