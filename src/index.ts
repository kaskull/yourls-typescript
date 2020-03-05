import { YourlsResponseExpand, YourlsResponseShort } from './types';
import axios from 'axios';

export class Yourls {
  private url: string;
  private apiKey: string;

  constructor(url: string, apiKey: string) {
    this.url = url;
    this.apiKey = apiKey;
  }

  public async generateUrl(longUrl: string, format = 'json') {
    const params = {
      signature: this.apiKey,
      action: 'shorturl',
      format,
      url: longUrl
    };
    try {
      return await axios
        .get<YourlsResponseShort>(this.url, { params })
        .then((response) => response.data);
    } catch (error) {
      console.error(error.message);
      return undefined;
    }
  }

  public async expandUrl(shortUrl: string, format = 'json') {
    const params = {
      signature: this.apiKey,
      action: 'expand',
      format,
      shorturl: shortUrl
    };
    try {
      return await axios
        .get<YourlsResponseExpand>(this.url, { params })
        .then((response) => response.data);
    } catch (error) {
      console.error(error.message);
      return undefined;
    }
  }
}
