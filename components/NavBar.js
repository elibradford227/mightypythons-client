/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from '../public/photos/logo.png';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src={logo} className="img" width={50} height={50} alt="Destination Guide" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/destinations">
              <Nav.Link>Destinations</Nav.Link>
            </Link>
            <Link passHref href="/activity">
              <Nav.Link>Activities</Nav.Link>
            </Link>
            {/*  {user && user.photoURL && (
              <Link passHref href="/profile">
                <Nav.Link>
                  <Image className="profile-img" src={user.photoURL} alt={user.displayName} />
                </Nav.Link>
              </Link>
            )} */}
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
