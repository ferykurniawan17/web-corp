import { useLocalization } from '@/src/shared/contexts/LocalizationContext';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '@/src/shared/types/BlogType';
import React from 'react';
import BlogLandingPageContainer from 'src/BlogLandingPage/BlogLandingPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';
import { get, post } from '@/src/core/services/APIService';
import { TableSpecType } from '@/src/shared/types/APITableListType';

type BlogLandingPageProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  banners: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
};

const BlogLandingPage = ({
  categories,
  hightlights,
  banners,
  otherArticle,
}: BlogLandingPageProps) => {
  return (
    <>
      <MetaTag
        title={'Beranda || Jakarta Smart City'}
        description={'Beranda Description'}
      />
      <BlogLandingPageContainer
        categories={categories}
        hightlights={hightlights}
        banners={banners}
        otherArticle={otherArticle}
      />
    </>
  )
};

export default BlogLandingPage;

export async function getStaticProps(context: any) {
  let specArticle: TableSpecType = {
    columns: [
      { data: "id" },
      { data: "slug" },
      { data: "name" },
      { data: "name_english" },
    ],
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: articleData } = await post('/public-article/data', specArticle);

  let specBanner: TableSpecType = {
    columns: [
      { data: "id" },
      { data: "slug" },
      { data: "name" },
      { data: "name_english" },
    ],
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: bannerData } = await post('/public-article/data', specBanner);

  let specOtherArticle: TableSpecType = {
    columns: [
      { data: "id" },
      { data: "slug" },
      { data: "name" },
      { data: "name_english" },
    ],
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: otherArticleData } = await post('/public-article/data', specOtherArticle);

  let specCategory: TableSpecType = {
    columns: [
      { data: "id" },
      { data: "slug" },
      { data: "name" },
      { data: "name_english" },
    ],
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: category } = await post('/public-article-category/data', specCategory);

  return {
    props: {
      categories: category.data,
      hightlights: articleData.data,
      banners: bannerData.data,
      otherArticle: bannerData,
    },
  }
}
