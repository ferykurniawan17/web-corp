import React from 'react';
import styles from './NewsCard.module.css';
import { Typography } from '@mui/material';
import cx from 'classnames';
import Link from 'next/link';

type NewsCardProps = {
  imageUrl: string;
  metaTitle: string;
  smallTitle: boolean;
  dateBottom: boolean;
  date: string;
  title: string;
  description?: string;
  readMoreLabel?: string;
  onClick: () => void;
  className?: any;
  link: string;
};

const NewsCard = (props: NewsCardProps) => {
  return (
    <Link href={props.link}>
      <div className={cx(props.className, styles.container)}>
        <div className={styles.topContent}>
          <label>{props.metaTitle}</label>
          {!props.dateBottom && <label className={styles.date}>{props.date}</label>}
        </div>
        <div className={styles.photoContainer}>
          <img src={props.imageUrl} className={styles.image} />
        </div>  
        <div className={styles.infoContainer}>
          <Typography
            className={
              cx(
                styles.title,
                {
                  [styles.smallTitle]: !!props.smallTitle
                }
              )
            }
            variant='h2'
          >
            {props.title}
          </Typography>
          {!!props.description && (
            <Typography className={styles.description} variant='body1'>{props.description}</Typography>
          )}
        </div>  
        {props.readMoreLabel && (
          <div className={styles.linkContainer}>
            <Link href="/">
              <a className={styles.link}>{props.readMoreLabel}</a>
            </Link>
          </div>
        )}
        <div>
          {props.dateBottom && (
            <div className={styles.datebottomContainer}>
              <label className={styles.date}>{props.date}</label>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

NewsCard.defaultProps = {
  smallTitle: false,
  dateBottom: false,
};

export default NewsCard;
