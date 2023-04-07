// These types are generated with https://github.com/quicktype/quicktype

export interface PostDto {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: string;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  topic: number[];
  group: number[];
  _event_location: string;
  _event_venue: string;
  _event_registration: string;
  _start_day: string;
  _start_month: string;
  _start_year: string;
  _end_day: string;
  _end_month: string;
  _end_year: string;
  _links: PostDtoLinks;
  _embedded: Embedded;
}

export interface Embedded {
  author: EmbeddedAuthor[];
  'wp:featuredmedia'?: WpFeaturedmedia[];
  'wp:term': Array<EmbeddedWpTerm[]>;
}

export interface EmbeddedAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: { [key: string]: string };
  user_job_title: string;
  user_website_title: string;
  user_google: string;
  user_twitter: string;
  user_facebook: string;
  user_photo: string;
  user_location: string;
  _links: AuthorLinks;
}

export interface AuthorLinks {
  self: About[];
  collection: About[];
}

export interface About {
  href: string;
}

export interface WpFeaturedmedia {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: GUID;
  author: number;
  caption: GUID;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: ReplyElement[];
  replies: ReplyElement[];
  'wp:term': LinksWpTerm[];
  curies: Cury[];
}

export interface ReplyElement {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: Name;
  href: Href;
  templated: boolean;
}

export enum Href {
  HTTPSAPIWOrgRel = 'https://api.w.org/{rel}',
}

export enum Name {
  Wp = 'wp',
}

export interface LinksWpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface GUID {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  image_meta: ImageMeta;
  sizes: Sizes;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes {}

export interface EmbeddedWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: WpTermLinks;
}

export interface WpTermLinks {
  self: About[];
  collection: About[];
  about: About[];
  'wp:post_type': About[];
  curies: Cury[];
  up?: ReplyElement[];
}

export interface PostDtoLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: ReplyElement[];
  replies: ReplyElement[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:featuredmedia'?: ReplyElement[];
  'wp:attachment': About[];
  'wp:term': LinksWpTerm[];
  curies: Cury[];
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}
