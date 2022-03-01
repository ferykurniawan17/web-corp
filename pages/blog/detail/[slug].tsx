import { get, post } from '@/src/core/services/APIService';
import { useLocalization } from '@/src/shared/contexts/LocalizationContext';
import { TableSpecType } from '@/src/shared/types/APITableListType';
import { ArticleDataResType, ArticleItemType, CategoryItemType } from '@/src/shared/types/BlogType';
import React from 'react';
import BlogDetailPageContainer from 'src/BlogDetailPage/BlogDetailPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

type BlogDetailPageProps = {
  categories: Array<CategoryItemType>;
  otherArticle: ArticleDataResType;
  detailArticle: ArticleItemType;
};

const BlogDetailPage = ({ categories, otherArticle, detailArticle }: BlogDetailPageProps) => {
  const { Localize } = useLocalization();
  const title = Localize.locale === 'id' ? detailArticle.name : detailArticle.name_english;
  const desc = Localize.locale === 'id' ? detailArticle.meta_description : detailArticle.meta_description_english;
  return (
    <>
      <MetaTag
        title={`${title} || Jakarta Smart City`}
        description={desc}
      />
      <BlogDetailPageContainer
        categories={categories}
        otherArticle={otherArticle}
        detailArticle={detailArticle}
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
  ];

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
  const { data: detail } = await get('/public-article', { slug: query.slug });

  return {
    props: {
      categories: category.data,
      otherArticle: otherArticleData,
      detailArticle: detail,
    },
  }
}


export default BlogDetailPage;
