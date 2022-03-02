import { get, post } from '@/src/core/services/APIService';
import { useLocalization } from '@/src/shared/contexts/LocalizationContext';
import { TableSpecType } from '@/src/shared/types/APITableListType';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '@/src/shared/types/BlogType';
import React from 'react';
import BlogCategoryPageContainer from 'src/BlogCategoryPage/BlogCategoryPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

type CategoryPageProps = {
  categories: Array<CategoryItemType>;
  hightlights: Array<ArticleItemType>;
  otherArticle: ArticleDataResType;
  categoryDetail: ArticleItemType;
};

const CategoryPage = ({
  categories,
  hightlights,
  otherArticle,
  categoryDetail,
}: CategoryPageProps) => {

  const { Localize } = useLocalization();

  const title = Localize.locale === 'id' ? categoryDetail.name : categoryDetail.name_english;
  const desc = Localize.locale === 'id' ? categoryDetail.name : categoryDetail.name_english;

  return (
    <>
      <MetaTag
        title={`${title} || Jakarta Smart City`}
        description={title}
      />
      <BlogCategoryPageContainer
        categoryDetail={categoryDetail}
        categories={categories}
        hightlights={hightlights}
        otherArticle={otherArticle}
      />
    </>
  )
};


export async function getServerSideProps({ query }: any) {
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

  const { data: categoryDetail } = await get('/public-article-category', { slug: query.slug });

  return {
    props: {
      categoryDetail: categoryDetail,
      categories: category.data,
      hightlights: articleData.data,
      otherArticle: otherArticleData,
    },
  }
};

export default CategoryPage;
