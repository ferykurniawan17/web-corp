import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import BannerSlider from 'src/shared/components/BannerSlider/BannerSlider';
import CategoryMenu from 'src/shared/components/CategoryMenu/CategoryMenu';
import HighlightNews from 'src/shared/components/HighlightNews/HighlightNews';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '../shared/types/BlogType';
import { MenuItem } from '../shared/types/GeneralTypes';
import { useLocalization } from '../shared/contexts/LocalizationContext';
import format from 'date-fns/format';

type BlogLandingPageViewProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  banners: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
  pathName: string;
};

const BlogLandingPageView = ({
  categories,
  hightlights,
  banners,
  otherArticle,
  pathName,
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
      <MainMenu transperant={true} pathName={pathName} />
      <BannerSlider
        data={banners.map((item: ArticleItemType, i: number) => ({
          title: Localize.locale === 'id' ? item.name : item.name_english,
          description: Localize.locale === 'id' ? item.short_description : item.short_description_english,
          alt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
          imageUrl: 'https://pusdatin.kemkes.go.id/assets/js/JssorSlider/img/landscape/x01.jpg.pagespeed.ic.JJ1gF1F7s1.webp',
          category: 'Banner',
          date: format(new Date(item.publish_date), 'dd MMMM yyyy', { locale: Localize.localeDate }),
          link: `/blog/detail/${item.slug}`,
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
      <Footer pathName={pathName} />
    </>
  );
}

export default BlogLandingPageView;
