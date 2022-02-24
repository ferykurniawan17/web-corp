import React from 'react';
import styles from './HighlightNews.module.css';
import cx from 'classnames';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';
import { Container } from 'react-bootstrap';

type HighlightNewsProps = {
  title?: string;
};

const HighlightNews = (props: HighlightNewsProps) => {
  return (
    <Container>
      <div className={cx(styles.wrapper)}>
        {!!props.title && (
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{props.title}</h1>
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
              imageUrl='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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
              imageUrl='https://media.istockphoto.com/photos/daily-papers-with-news-on-the-computer-picture-id1301656823?b=1&k=20&m=1301656823&s=170667a&w=0&h=s9IXcVfB151qb7Vb_9uJbl-XDGr2179rHA4ikgpdTUM='
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
              imageUrl='https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309?b=1&k=20&m=1312418309&s=170667a&w=0&h=IQjnPp5L9QsiXoLcqFrxOH_gqby80jDPKbu_TE-6_dY='
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
              imageUrl='https://media.istockphoto.com/photos/daily-papers-with-news-on-the-computer-picture-id1301656823?b=1&k=20&m=1301656823&s=170667a&w=0&h=s9IXcVfB151qb7Vb_9uJbl-XDGr2179rHA4ikgpdTUM='
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
              imageUrl='https://media.istockphoto.com/photos/reporter-presenting-the-news-outdoors-picture-id1315630659?b=1&k=20&m=1315630659&s=170667a&w=0&h=tjnwdXrZKyPjdKgw8aXKG8zpfrf8ziNlg4mntKOOWas='
              onClick={() => {}}
              className={styles.sideCard}
              link={'/blog/detail/detail-blog'}
            />
          </div>  
        </div>
      </div>
    </Container>
  );
};

export default HighlightNews;
