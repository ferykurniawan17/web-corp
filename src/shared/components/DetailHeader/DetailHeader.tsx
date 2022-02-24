import React, { useEffect, useState } from 'react';
import styles from './DetailHeader.module.css';
import cx from 'classnames';
import Link from 'next/link';


import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';

type DetailHeaderProps = {
  title: string;
  shortDescription: string;
  authorName: string;
  coWritter: Array<string>;
  date: string;
};

const DetailHeader = (props: DetailHeaderProps) => {
  return (
    <Container className={styles.container}>
      <Typography className={styles.description} variant='body1'>{'Jakarta Kini'}</Typography>
      <Typography className={styles.title} variant='h1'>{props.title}</Typography>
      <Typography className={styles.shortDescription} variant='body1'>{props.shortDescription}</Typography>
      <div className={styles.authorContainer}>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <Typography className={styles.label} variant='body1'>{'Oleh'}</Typography>
            <Typography className={styles.value} variant='body1'>{props.authorName}</Typography>
          </div>
          <div className={styles.authorInfo}>
            <Typography className={styles.label} variant='body1'>{'Co-Writter'}</Typography>
            {props.coWritter.map((item: string) => (
              <Typography className={styles.value} variant='body1'>{item}</Typography>
            ))}
          </div>
        </div>
        <div className={styles.date}>
          <Typography className={styles.value} variant='body1'>{props.date}</Typography>
        </div>
      </div>
    </Container>
  );
};

export default DetailHeader;
