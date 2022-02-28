import React from 'react';
import styles from './NewsCard.module.css';
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
  large: boolean;
};

const NewsCard = (props: NewsCardProps) => {
  return (
    <Link href={props.link}>
      <div className={cx(props.className, styles.container)}>
        <div className={styles.topContent}>
          <label>{props.metaTitle}</label>
          {!props.dateBottom && <label className={styles.date}>{props.date}</label>}
        </div>
        <div className={cx(styles.photoContainer, { [styles.large]: props.large })}>
          <img src={props.imageUrl} className={styles.image} />
        </div>  
        <div className={styles.infoContainer}>
          <h2
            className={
              cx(
                styles.title,
                {
                  [styles.smallTitle]: !!props.smallTitle
                }
              )
            }
          >
            {props.title}
          </h2>
          {!!props.description && (
            <p className={styles.description}>{props.description}</p>
          )}
        </div>  
        {props.readMoreLabel && (
          <div className={styles.linkContainer}>
            <Link href="/">
              <a className={styles.link}>{`${props.readMoreLabel} >`}</a>
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
  large: false,
};

export default NewsCard;
