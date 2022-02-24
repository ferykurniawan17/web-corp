import React from 'react';
import styles from './DetailHeader.module.css';
import { Container } from 'react-bootstrap';

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
      <p className={styles.description}>{'Jakarta Kini'}</p>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.shortDescription}>{props.shortDescription}</p>
      <div className={styles.authorContainer}>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <p className={styles.label}>{'Oleh'}</p>
            <p className={styles.value}>{props.authorName}</p>
          </div>
          <div className={styles.authorInfo}>
            <p className={styles.label}>{'Co-Writter'}</p>
            {props.coWritter.map((item: string) => (
              <p className={styles.value}>{item}</p>
            ))}
          </div>
        </div>
        <div className={styles.date}>
          <p className={styles.dateValue}>{props.date}</p>
        </div>
      </div>
    </Container>
  );
};

export default DetailHeader;
