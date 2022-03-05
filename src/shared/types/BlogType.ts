import { Nullable } from "./GeneralTypes";
import { PersonaItemType } from "./PersonaType";

export type CategoryItemType = {
  id: string;
  slug: string;
  name: string;
  name_english: string;
  created_by: Nullable<string>;
  updated_by: Nullable<string>;
  created_at: string;
  updated_at: string;
};

export type TagItemType = {
  id: string;
  slug: string;
  name: string;
  name_english: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
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
  persona_writer: PersonaItemType;
  persona_editor: PersonaItemType;
  list_category: Array<CategoryItemType>;
  list_subcategory: Array<CategoryItemType>;
  list_co_writer: Array<PersonaItemType>;
  list_tags: Array<TagItemType>;
};

export type ArticleDataResType = {
  recordsTotal: number;
  data: Array<ArticleItemType>;
};
