/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="home"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        {/* <h3>Hello {user.fbUser.displayName}! </h3> */}
        <h1>Welcome to Trip Trekker {user.fbUser.displayName}!</h1>
        <br />
        <img
          src={user.fbUser.photoURL}
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
          }}
          alt="profile avatar"
        />
        <br />
        <div className="scroll-snap-card" style={{ fontWeight: 'bold' }}>
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
    </>
  );
}

export default Home;
