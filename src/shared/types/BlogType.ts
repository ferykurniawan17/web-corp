export type CategoryItemType = {
  id: string;
  slug: string;
  name: string;
  name_english: string;
};

export type ArticleItemType = {
  id: string;
  slug: string;
  name: string;
  name_english: string;
  featured: boolean;
  description: string;
  description_english: string;
  short_description: string;
  short_description_english: string;
  meta_description: string;
  meta_description_english: string;
  cover_image_id: Array<string>;
  category_id: string;
  sub_category_id: string;
  tags: Array<string>;
  writer: string;
  co_writer: Array<string>;
  editor: string;
  video_embed_link: string;
  status: string;
  publish_date: string;
};

export type ArticleDataResType = {
  recordsTotal: number;
  data: Array<ArticleItemType>;
};
