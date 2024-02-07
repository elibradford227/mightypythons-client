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
import logo from '../public/photos/logo.png';
import { signOut } from '../utils/auth';
import DontButton from './dontOpen/dontButton';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image
              src={logo}
              className="img"
              width={75}
              height={75}
              alt="Dwango Hip Hop, Pizza, & Wings Logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/destinations">
              <Nav.Link>Destinations</Nav.Link>
            </Link>
            <Link passHref href="/activity">
              <Nav.Link>Activity</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
            <DontButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
