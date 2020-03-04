import { Yourls } from '../yourls';

const example = new Yourls ('url_yourls_server','api_signature');

console.log(example.generateUrl('www.exampleweb.com'));