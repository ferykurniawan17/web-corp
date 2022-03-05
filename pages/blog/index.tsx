import { useLocalization } from '@/src/shared/contexts/LocalizationContext';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '@/src/shared/types/BlogType';
import React from 'react';
import BlogLandingPageContainer from 'src/BlogLandingPage/BlogLandingPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';
import { post } from '@/src/core/services/APIService';
import { TableSpecType } from '@/src/shared/types/APITableListType';

type BlogLandingPageProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  banners: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
  pathName: string;
};

const BlogLandingPage = ({
  categories,
  hightlights,
  banners,
  otherArticle,
  pathName,
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
        pathName={pathName}
      />
    </>
  )
};

export async function getServerSideProps({ req, res, resolvedUrl }: any) {
  const columns = [
    { data: 'id' },
    { data: 'slug' },
    { data: 'name' },
    { data: 'name_english' },
    { data: 'featured' },
    { data: 'description' },
    { data: 'description_english' },
    { data: 'short_description' },
    { data: 'short_description_english' },
    { data: 'meta_description' },
    { data: 'meta_description_english' },
    { data: 'cover_image_id' },
    { data: 'category_id' },
    { data: 'sub_category_id' },
    { data: 'tags' },
    { data: 'writer' },
    { data: 'co_writer' },
    { data: 'editor' },
    { data: 'video_embed_link' },
    { data: 'status' },
    { data: 'publish_date' },
  ]
  let specArticle: TableSpecType = {
    columns,
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: articleData } = await post('/public-article/data', specArticle);

  let specBanner: TableSpecType = {
    columns,
    order: {
      column: 'name',
      dir: 'asc'
    },
    page: 1,
    perPage: 6,
  };
  const { data: bannerData } = await post('/public-article/data', specBanner);

  let specOtherArticle: TableSpecType = {
    columns,
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
      otherArticle: otherArticleData,
      pathName: resolvedUrl,
    },
  }
};

export default BlogLandingPage;
