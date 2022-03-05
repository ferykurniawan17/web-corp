import { Nullable } from "./GeneralTypes";

export type PersonaItemType = {
  id: string;
  slug: string;
  name: string;
  position: string;
  position_english: string;
  facebook: string;
  instagram: string;
  url: string;
  photo_profile_id: string;
  division_id: string;
  category_id: string;
  status: string;
  sequence: string;
  short_bio: string;
  short_bio_english: string;
  created_at: string;
  updated_at: string;
  created_by: Nullable<string>;
  updated_by: Nullable<string>;
  linkedin: Nullable<string>;
  twitter: Nullable<string>;
};
