import React, { useEffect, useState, useRef } from 'react';
import styles from './MainMenu.module.css';
import cx from 'classnames';
import Link from 'next/link';
import { Search, X, List } from 'react-bootstrap-icons';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocalization } from '../../contexts/LocalizationContext';
import SimpleVerticalNav from 'src/shared/components/SimpleVerticalNav/SimpleVerticalNav';
import { post } from '@/src/core/services/APIService';
import { TableSpecType } from 'src/shared/types/APITableListType';
import { BlogColumnsSpec } from '../../constants/BlogConstant';
import { ArticleItemType } from '../../types/BlogType';

type MainMenuProps = {
  transperant: boolean;
  pathName: string;
};

const MainMenu = ({ transperant, pathName }: MainMenuProps) => {
  const [articles, setArticles] = useState<Array<ArticleItemType>>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const refNav = useRef(null);

  const { Localize } = useLocalization();
  const [transparent, setTransperant] = useState<boolean>(false);

  useEffect(() => {
    getNews();
    setTransperant(transperant);
    window.addEventListener('scroll', () => {
      const menu = document.getElementById('navbarScroll');
      if (menu?.className.indexOf('show') >= 0) {
        setTransperant(false);
        return;
      }
      if (!transperant) return;
      if (window.pageYOffset > 2) {
        setTransperant(false);
      } else {
        setTransperant(true);
      }
    });
  }, []);

  const getNews = async () => {
    let spec: TableSpecType = {
      columns: BlogColumnsSpec,
      order: {
        column: 'name',
        dir: 'asc'
      },
      page: 1,
      perPage: 4,
    };
    const { data: articleData } = await post('/public-article/data?group=utama', spec);
    setArticles(articleData.data);
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  }

  return (
    <Navbar
      sticky="top"
      expand="lg"
      ref={refNav}
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
            <>
              <img className={cx(styles.logo, 'whiteLogo')} src='/images/app-logo-white.png' />
              <img className={cx(styles.logo, 'colorLogo')} src='/images/app-logo-color.png' />
            </>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setTransperant(false)}>
          <List color={(transparent || showSearch) ? '#fff' : 'rgba(0,0,0,.55)'} />
        </Navbar.Toggle>
        <div className={cx(styles.menuRightSearch, 'hearderMenuRightSearch', styles.hearderMenuRightSearchMobile)}>
          <button className='btn-transparant' onClick={handleShowSearch}>
            <Search color={(transparent || showSearch) ? '#fff' : 'rgba(0,0,0,.55)'} />
          </button>
          <div className={cx(styles.menuLang, 'headerMenuLang')}>
            <Link href={`/en${pathName}`} locale={false}>
              <a className={Localize.locale === 'en' ? styles.active : ''}>EN</a>
            </Link>
            <Link href={`/id${pathName}`} locale={false}>
              <a className={Localize.locale === 'id' ? styles.active : ''}>ID</a>
            </Link>
          </div>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              // maxHeight: '100px',
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
        <div className={cx(styles.menuRightSearch, 'hearderMenuRightSearch', styles.hearderMenuRightSearchDesktop)}>
          <button className='btn-transparant' onClick={handleShowSearch}>
            <Search color={(transparent || showSearch) ? '#fff' : 'rgba(0,0,0,.55)'} />
          </button>
          <div className={cx(styles.menuLang, 'headerMenuLang')}>
            <Link href={`/en${pathName}`} locale={false}>
              <a className={Localize.locale === 'en' ? styles.active : ''}>EN</a>
            </Link>
            <Link href={`/id${pathName}`} locale={false}>
              <a className={Localize.locale === 'id' ? styles.active : ''}>ID</a>
            </Link>
          </div>
        </div>
      </Container>
      <div className={styles.hideContainer}>
        {showSearch && (
          <div className={styles.menuSearch}>
            <Container>
              <div className={styles.menuSearchContent}>
                <div className={styles.menuSearchContentNav}>
                  <textarea rows={2} placeholder={Localize.getText('searchMenuTitle')} className={styles.inputStyle}></textarea>
                  <div className={styles.blockMenu}>
                    <div className={styles.blockItem}>
                      <h3 className={styles.menuTitle}>{Localize.getText('popularMenuItem')}</h3>
                      <SimpleVerticalNav
                        menus={articles.map((item: ArticleItemType) => ({
                          label: item.name,
                          link: `/blog/detail/${item.slug}`,
                        }))}
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
