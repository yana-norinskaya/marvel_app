export interface Url {
  type: string;
  url: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Date {
  type: string;
  date: any;
}

export interface Price {
  type: string;
  price: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Result {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: any;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: any[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

export interface IDataComics {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface ISingleComics {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDataComics;
}
