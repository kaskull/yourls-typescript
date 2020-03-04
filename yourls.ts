import { YourlsParams, YourlsResponse } from './types';
import axios from 'axios';

export class Yourls{
    private url: string;
    private api: string;

    constructor( url:string, api:string ){
        this.url = url;
        this.api = api;
    }
    
    public generateUrl(longUrl: string) {
        const params = {
            signature: this.api,
            action: 'shorturl',
            format: 'json',
            url: longUrl
        };
        return axios.get<YourlsResponse>(this.url,  params ).then((response) => response.data).catch(console.error);
    }
}