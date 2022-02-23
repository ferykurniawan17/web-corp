import React from 'react';
import styles from './GridNews.module.css';
import cx from 'classnames';
import { Typography } from '@mui/material';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';

type GridNewsProps = {
  title: string;
};

const GridNews = (props: GridNewsProps) => {
  return (
    <div className={cx('container', styles.wrapper)}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title} variant='h1'>{props.title}</Typography>
      </div>
      <div className={styles.container}>
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          metaTitle='Jakarta Tanggap Covid-19'
          smallTitle
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          smallTitle
          metaTitle='Jakarta Tanggap Covid-19'
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          smallTitle
          metaTitle='Jakarta Tanggap Covid-19'
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          smallTitle
          metaTitle='Jakarta Tanggap Covid-19'
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          smallTitle
          metaTitle='Jakarta Tanggap Covid-19'
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
        <NewsCard
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          smallTitle
          metaTitle='Jakarta Tanggap Covid-19'
          date='22 Jan 2022'
          dateBottom
          imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
          onClick={() => {}}
          className={styles.sideCardNoborder}
          link={'/blog/detail/detail-blog'}
        />
      </div>
    </div>
  );
};

export default GridNews;
