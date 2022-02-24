import React from 'react';
import styles from './GridNews.module.css';
import cx from 'classnames';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';
import { Container } from 'react-bootstrap';

type GridNewsProps = {
  title: string;
};

const GridNews = (props: GridNewsProps) => {
  return (
    <Container>
      <div className={cx(styles.wrapper)}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <div className={styles.container}>
          <NewsCard
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            metaTitle='Jakarta Tanggap Covid-19'
            smallTitle
            date='22 Jan 2022'
            dateBottom
            imageUrl='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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
            imageUrl='https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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
            imageUrl='https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
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
            imageUrl='https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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
            imageUrl='https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
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
            imageUrl='https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            onClick={() => {}}
            className={styles.sideCardNoborder}
            link={'/blog/detail/detail-blog'}
          />
        </div>
      </div>
    </Container>
  );
};

export default GridNews;
