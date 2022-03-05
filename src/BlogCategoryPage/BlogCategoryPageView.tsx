import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import CategoryHeader from 'src/shared/components/CategoryHeader/CategoryHeader';
import HighlightNews from 'src/shared/components/HighlightNews/HighlightNews';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '../shared/types/BlogType';
import { useLocalization } from '../shared/contexts/LocalizationContext';

type BlogCategoryPageViewProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
  categoryDetail: ArticleItemType;
  pathName: string;
};

const BlogCategoryPageView = ({
  categories,
  hightlights,
  otherArticle,
  categoryDetail,
  pathName,
}: BlogCategoryPageViewProps) => {
  const { Localize } = useLocalization();

  return (
    <>
      <MainMenu transperant={false} pathName={pathName} />
      <div className={'bg-container'}>
        <CategoryHeader
          categoryName={Localize.locale === 'id' ? categoryDetail.name : categoryDetail.name_english}
          menus={categories.map((item: CategoryItemType) => ({
            label: Localize.locale === 'id' ? item.name : item.name_english,
            link: `/blog/kategori/${item.slug}`,
          }))}
        />
        <HighlightNews
          articles={hightlights}
        />
        <GridNews
          title={Localize.getText('btnArticleDetail')}
          articles={otherArticle.data}
          total={otherArticle.recordsTotal}
        />
      </div>
      <Footer />
    </>
  );
}

BlogCategoryPageView.defaultProps = {
  categories: [],
};

export default BlogCategoryPageView;
