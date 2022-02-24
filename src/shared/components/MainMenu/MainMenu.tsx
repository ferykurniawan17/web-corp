import React, { useEffect, useState } from 'react';
import styles from './MainMenu.module.css';
import cx from 'classnames';
import Link from 'next/link';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

type MainMenuProps = {
  transperant: boolean;
};

const MainMenu = (props: MainMenuProps) => {
  const [transparent, setTransperant] = useState<boolean>(false);
  useEffect(() => {
    setTransperant(props.transperant);
    window.addEventListener('scroll', () => {
      if (!props.transperant) return;
      if (window.pageYOffset > 2) {
        setTransperant(false);
      } else {
        setTransperant(true);
      }
    });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={
        cx(
          styles.container, {
            ['tranparentMenu']: transparent,
          }
        )
      }
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link href={'/blog'}>
            <img className={styles.logo} src='/images/jkt-colaboration.png' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setTransperant(false)} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: '100px',
              marginLeft: 'auto!important',
              marginRight: 'unset!important',
            }}
            navbarScroll
          >
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Blog</Nav.Link>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Product</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Persona" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Persona</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Kegiatan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainMenu;
