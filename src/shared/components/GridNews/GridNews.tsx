import React from 'react';
import styles from './GridNews.module.css';
import cx from 'classnames';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';
import { Container } from 'react-bootstrap';
import { ArticleItemType } from '../../types/BlogType';
import { useLocalization } from '../../contexts/LocalizationContext';

type GridNewsProps = {
  title: string;
  articles: Array<ArticleItemType>;
  total: number;
};

const GridNews = ({ title, articles }: GridNewsProps) => {
  const { Localize } = useLocalization();
  return (
    <Container>
      <div className={cx(styles.wrapper)}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.container}>
          {articles.map((item: ArticleItemType, i: number) => (
            <NewsCard
              title={Localize.locale === 'id' ? item.name : item.name_english}
              metaTitle={Localize.locale === 'id' ? item.short_description : item.short_description_english}
              smallTitle
              date={item.publish_date}
              dateBottom
              imageUrl='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              className={styles.sideCardNoborder}
              link={`/blog/detail/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

GridNews.defaultProps = {
  articles: [],
}

export default GridNews;
