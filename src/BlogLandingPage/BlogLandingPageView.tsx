import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import BannerSlider from 'src/shared/components/BannerSlider/BannerSlider';
import CategoryMenu from 'src/shared/components/CategoryMenu/CategoryMenu';
import HighlightNews from 'src/shared/components/HighlightNews/HighlightNews';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import { BannerItemType } from '../shared/types/BannerType';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '../shared/types/BlogType';
import { MenuItem } from '../shared/types/GeneralTypes';
import { useLocalization } from '../shared/contexts/LocalizationContext';

type BlogLandingPageViewProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  banners: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
};

const BlogLandingPageView = ({
  categories,
  hightlights,
  banners,
  otherArticle,
}: BlogLandingPageViewProps) => {
  const { Localize } = useLocalization();

  const convertMenu = (): Array<MenuItem> => {
    return categories.map((item: CategoryItemType) => {
      let label = item.name;
      if (Localize.locale === 'en') {
        label = item.name;
      }
      return {
        label,
        link: `/blog/kategori/${item.slug}`
      };
    });
  }

  return (
    <>
      <MainMenu transperant={true} />
      <BannerSlider
        data={banners.map((item: ArticleItemType, i: number) => ({
          title: Localize.locale === 'id' ? item.name : item.name_english,
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
          alt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
          imageUrl: 'https://pusdatin.kemkes.go.id/assets/js/JssorSlider/img/landscape/x01.jpg.pagespeed.ic.JJ1gF1F7s1.webp',
          category: 'Banner',
          date: '12 Jan 2022',
        }))}
      />
      <CategoryMenu menu={convertMenu()} />
      <div className={'bg-container'}>
        <HighlightNews
          title={Localize.getText('hightlightNewsLabel')}
          articles={hightlights}
        />
        <GridNews
          title={Localize.getText('otherArticle')}
          articles={otherArticle.data}
          total={otherArticle.recordsTotal}
        />
      </div>
      <Footer />
    </>
  );
}

export default BlogLandingPageView;
