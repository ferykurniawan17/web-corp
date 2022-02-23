import React from 'react';
import styles from './HighlightNews.module.css';
import cx from 'classnames';
import { Typography } from '@mui/material';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';
import { Container } from 'react-bootstrap';

type HighlightNewsProps = {
  title?: string;
};

const HighlightNews = (props: HighlightNewsProps) => {
  return (
    // <Container fluid>
      <div className={cx('container', styles.wrapper)}>
        {!!props.title && (
          <div className={styles.titleContainer}>
            <Typography className={styles.title} variant='h1'>{props.title}</Typography>
          </div>
        )}
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <NewsCard
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
              metaTitle='Jakarta Tanggap Covid-19'
              date='22 Jan 2022'
              readMoreLabel='Baca Artikel'
              imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
              onClick={() => {}}
              className={styles.sideCardNoborder}
              link={'/blog/detail/detail-blog'}
            />
            <NewsCard
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
              metaTitle='Jakarta Tanggap Covid-19'
              date='22 Jan 2022'
              readMoreLabel='Baca Artikel'
              imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
              onClick={() => {}}
              className={styles.sideCard}
              link={'/blog/detail/detail-blog'}
            />
          </div>  
          <div className={styles.rightSide}>
            <NewsCard
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              smallTitle
              metaTitle='Jakarta Tanggap Covid-19'
              date='22 Jan 2022'
              readMoreLabel='Baca Artikel'
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
              readMoreLabel='Baca Artikel'
              imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
              onClick={() => {}}
              className={styles.sideCard}
              link={'/blog/detail/detail-blog'}
            />
            <NewsCard
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              smallTitle
              metaTitle='Jakarta Tanggap Covid-19'
              date='22 Jan 2022'
              readMoreLabel='Baca Artikel'
              imageUrl='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'
              onClick={() => {}}
              className={styles.sideCard}
              link={'/blog/detail/detail-blog'}
            />
          </div>  
        </div>
      </div>
    // </Container>
  );
};

export default HighlightNews;
