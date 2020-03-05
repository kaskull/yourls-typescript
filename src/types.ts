
export interface YourlsParams {
  signature: string;
  action: 'shorturl' | 'expand' | 'stats' | 'url-stats' | 'db-stats';
  format: 'jsonp' | 'json' | 'xml' | 'simple';
  url: string;
}
export interface YourlsResponseShort {
  status: string;
  code: string;
  url: Url;
  message: string;
  title: string;
  shorturl: string;
  statusCode: number;
  longurl?: string;
}

export interface Url {
  keyword: string;
  url: string;
  title: string;
  date: string;
  ip: string;
  clicks: string;
}

export interface YourlsResponseExpand {
  keyword: string;
  longurl: string;
  message: string;
  shorturl: string;
  statusCode: number;
  title: string;
}