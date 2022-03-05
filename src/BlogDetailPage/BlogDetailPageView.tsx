import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import DetailHeader from 'src/shared/components/DetailHeader/DetailHeader';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '../shared/types/BlogType';
import { useLocalization } from '../shared/contexts/LocalizationContext';
import format from 'date-fns/format';
import { Container } from 'react-bootstrap';
import parse from 'html-react-parser';
import styles from './BlogDetailPageView.module.css';

type BlogDetailPageViewProps = {
  categories: Array<CategoryItemType>;
  otherArticle: ArticleDataResType;
  detailArticle: ArticleItemType;
  pathName: string;
};

const BlogDetailPageView = ({ detailArticle, otherArticle, pathName }: BlogDetailPageViewProps) => {
  const { Localize } = useLocalization();
  return (
    <>
      <MainMenu transperant={false} pathName={pathName} />
      <div className={'bg-container'}>
        <DetailHeader
          title={Localize.locale === 'id' ? detailArticle.name : detailArticle.name_english}
          shortDescription={Localize.locale === 'id' ? detailArticle.short_description : detailArticle.short_description_english}
          authorName='Yasmin Hadi'
          coWritter={['Aditya Gagat']}
          date={format(new Date(detailArticle.publish_date), 'dd MMMM yyyy', { locale: Localize.localeDate })}
        />
        <Container className={styles.container}>
          {parse(detailArticle.description_english)}
        </Container>
        {!!otherArticle && (
          <GridNews
            title={Localize.getText('otherArticle')}
            articles={otherArticle.data || []}
            total={otherArticle.recordsTotal}
          />
        )}
      </div>
      <Footer pathName={pathName} />
    </>
  );
}

export default BlogDetailPageView;
