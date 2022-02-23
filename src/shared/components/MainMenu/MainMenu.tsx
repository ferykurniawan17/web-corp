import React from 'react';
import styles from './MainMenu.module.css';
import cx from 'classnames';
import Link from 'next/link';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className={styles.logo} src='/images/jkt-colaboration.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.appLogo}>
  //       <img className={styles.logo} src='/images/jkt-colaboration.png' />
  //     </div>
  //     <div className={cx('container', styles.mainMenu)}>
  //       <ul>
  //         <li>
  //           <Link href={'/'}><a>Profil</a></Link>
  //         </li>
  //         <li>
  //           <Link href={'/'}><a href='/'>Blog</a></Link>
  //         </li>
  //         <li>
  //           <Link href={'/'}><a href='/'>Product</a></Link>
  //         </li>
  //         <li>
  //           <Link href={'/'}><a href='/'>Persona</a></Link>
  //         </li>
  //         <li>
  //           <Link href={'/'}><a href='/'>Kegiatan</a></Link>
  //         </li>
  //         <li>
  //           <Link href={'/'}><a href='/'>Kolaborasi</a></Link>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className={styles.searchContent}>
  //       <label>Search</label>
  //     </div>
  //   </div>
  // );
};

export default MainMenu;
