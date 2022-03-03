import React, { useEffect } from 'react';
import styles from './HighlightNews.module.css';
import cx from 'classnames';
import NewsCard from 'src/shared/components/NewsCard/NewsCard';
import { Container } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';
import { ArticleItemType } from '../../types/BlogType';
import { useLocalization } from 'src/shared/contexts/LocalizationContext';
import format from 'date-fns/format';

type HighlightNewsProps = {
  title?: string;
  articles: Array<ArticleItemType>;
};

const HighlightNews = ({ title, articles }: HighlightNewsProps) => {
  const { Localize } = useLocalization();

  // useEffect(() => {
  //   caller.get('/entries')
  // }, []);

  const articleListLeft = [...articles].slice(0, 2);
  let articleListRight: Array<ArticleItemType> = [];
  if (articles.length > 2) {
    articleListRight = [...articles].slice(2, 3);
  }

  return (
    <Container>
      <div className={cx(styles.wrapper)}>
        {!!title && (
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        )}
        <div className={styles.container}>
          <div className={styles.leftSide}>
            {articleListLeft.map((item: ArticleItemType, i: number) => (
              <NewsCard
                key={`leftArticle${item.id}`}
                title={Localize.locale === 'id' ? item.name : item.name_english}
                description={Localize.locale === 'id' ? item.short_description : item.short_description_english}
                metaTitle={Localize.locale === 'id' ? item.meta_description : item.meta_description_english}
                date={format(new Date(item.publish_date), 'dd MMMM yyyy', { locale: Localize.localeDate })}
                readMoreLabel={Localize.getText('btnArticleDetail')}
                imageUrl='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                className={styles.sideCardNoborder}
                link={`/blog/detail/${item.slug}`}
                large
              />
            ))}
          </div>  
          <div className={styles.rightSide}>
            {articleListRight.map((item: ArticleItemType, i: number) => (
              <NewsCard
                key={`rightArticle${item.id}`}
                title={Localize.locale === 'id' ? item.name : item.name_english}
                description={Localize.locale === 'id' ? item.short_description : item.short_description_english}
                metaTitle={Localize.locale === 'id' ? item.meta_description : item.meta_description_english}
                date={format(new Date(item.publish_date), 'dd MMMM yyyy', { locale: Localize.localeDate })}
                readMoreLabel={Localize.getText('btnArticleDetail')}
                imageUrl='https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309?b=1&k=20&m=1312418309&s=170667a&w=0&h=IQjnPp5L9QsiXoLcqFrxOH_gqby80jDPKbu_TE-6_dY='
                className={styles.sideCardNoborder}
                link={`/blog/detail/${item.slug}`}
              />
            ))}
          </div>  
        </div>
      </div>
    </Container>
  );
};

HighlightNews.defaultProps = {
  articles: [],
};

export default HighlightNews;
