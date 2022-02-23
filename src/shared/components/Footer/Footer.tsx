import React from 'react';
import styles from './Footer.module.css';
import { Typography } from '@mui/material';
import SimpleVerticalNav from 'src/shared/components/SimpleVerticalNav/SimpleVerticalNav';

type FooterProps = {
  
};

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.container}>
      <div className='container'>
        <div className={styles.instantionContainer}>
          <div className={styles.instantionLeft}>
            <img className={styles.imageJSC} src='/images/jakarta-smart-city.png' />
          </div>
          <div className={styles.instantionRight}>
            <img className={styles.imageDKI} src='/images/pemprov-dki.png' />
            <img className={styles.imageColaboration} src='/images/jkt-colaboration.png' />
          </div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>
            <Typography className={styles.menuTitle} variant='h3'>{`Perusahaan`}</Typography>
            <SimpleVerticalNav
              menus={[
                { label: 'Profile', link: '/' },
                { label: 'Blog', link: '/' },
                { label: 'Product', link: '/' },
                { label: 'Kegiatan', link: '/' },
                { label: 'Persona', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuItem}>
            <Typography className={styles.menuTitle} variant='h3'>{`Hubungi Kami`}</Typography>
            <SimpleVerticalNav
              menus={[
                { label: 'FAQ', link: '/' },
                { label: 'Kontak', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuItem}>
            <Typography className={styles.menuTitle} variant='h3'>{`Kolaborasi`}</Typography>
            <SimpleVerticalNav
              menus={[
                { label: '+Jakarta', link: '/' },
                { label: 'Kolaborator', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuSosmed}>
            <Typography className={styles.menuTitle} variant='h3'>{`Temukan kami di sosial media`}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
