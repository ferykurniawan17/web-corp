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
};

export type ArticleDataResType = {
  recordsTotal: number;
  data: Array<ArticleItemType>;
};
