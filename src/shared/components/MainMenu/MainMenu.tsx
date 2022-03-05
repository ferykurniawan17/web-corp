import React, { useEffect, useState } from 'react';
import styles from './MainMenu.module.css';
import cx from 'classnames';
import Link from 'next/link';
import { Search, X } from 'react-bootstrap-icons';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocalization } from '../../contexts/LocalizationContext';
import SimpleVerticalNav from 'src/shared/components/SimpleVerticalNav/SimpleVerticalNav';

type MainMenuProps = {
  transperant: boolean;
  pathName: string;
};

const MainMenu = ({ transperant, pathName }: MainMenuProps) => {

  const [showSearch, setShowSearch] = useState<boolean>(false);

  const { Localize } = useLocalization();
  const [transparent, setTransperant] = useState<boolean>(false);
  useEffect(() => {
    setTransperant(transperant);
    window.addEventListener('scroll', () => {
      if (!transperant) return;
      if (window.pageYOffset > 2) {
        setTransperant(false);
      } else {
        setTransperant(true);
      }
    });
  }, []);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  }

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={
        cx(
          styles.container, {
            ['tranparentMenu']: transparent,
            ['showMenu']: showSearch,
          }
        )
      }
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link href={'/blog'}>
            <img className={styles.logo} src='/images/app-logo-white.png' />
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
        <div className={cx(styles.menuRightSearch, 'hearderMenuRightSearch')}>
          <button className='btn-transparant' onClick={handleShowSearch}>
            <Search color={(transparent || showSearch) ? '#fff' : 'rgba(0,0,0,.55)'} />
          </button>
          <div className={cx(styles.menuLang, 'headerMenuLang')}>
            <a href={`/en${pathName}`} className={Localize.locale === 'en' ? styles.active : ''}>EN</a>
            <a href={`/id${pathName}`} className={Localize.locale === 'id' ? styles.active : ''}>ID</a>
          </div>
        </div>
      </Container>
      <div className={styles.hideContainer}>
        {showSearch && (
          <div className={styles.menuSearch}>
            <Container>
              <div className={styles.menuSearchContent}>
                <div className={styles.menuSearchContentNav}>
                  <h2 className={styles.menuSearchTitle}>{Localize.getText('searchMenuTitle')}</h2>
                  <div className={styles.blockMenu}>
                    <div className={styles.blockItem}>
                      <h3 className={styles.menuTitle}>{Localize.getText('popularMenuItem')}</h3>
                      <SimpleVerticalNav
                        menus={[
                          { label: 'JAKI', link: '/' },
                          { label: 'Blog', link: '/' },
                          { label: 'Product', link: '/' },
                          { label: 'Kegiatan', link: '/' },
                        ]}
                      />
                    </div>
                    <div className={styles.blockItem}>
                      <h3 className={styles.menuTitle}>{Localize.getText('popularMenuTag')}</h3>
                      <SimpleVerticalNav
                        menus={[
                          { label: Localize.getText('ourProductLabel'), link: '/' },
                          { label: Localize.getText('profileLabel'), link: '/' },
                          { label: Localize.getText('colaborationLabel'), link: '/' },
                          { label: Localize.getText('blogLabel'), link: '/' },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.menuSearchContentRight}>
                  <button className='btn-transparant' onClick={() => setShowSearch(false)}>
                    <div className={styles.btnClose}>
                      <X width={25} height={25} color='#0062E0' />
                    </div>
                  </button>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    </Navbar>
  );
};

MainMenu.defaultProps = {
  pathName: ''
};

export default MainMenu;
