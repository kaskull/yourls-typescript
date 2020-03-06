import { Yourls } from './../src/index';
describe('yourls', () => {
  describe('Happy path', () => {
    let yourls: Yourls;
    beforeEach(() => {
      yourls = new Yourls(process.env.API_URL || '', process.env.API_KEY || '');
    });
    it('should shortUrl', async () => {
      const result = await yourls.generateUrl('www.google.es');
      expect(result)
        .toBeDefined()
        .toContainKey('shorturl')
        .toContainEntry(['statusCode', 200]);
    });
    it('should expandUrl', async () => {
      const short = await yourls.generateUrl('www.google.es');
      const result = await yourls.expandUrl((short && short.shorturl) || '');
      expect(result)
        .toBeDefined()
        .toContainKey('longurl')
        .toContainEntry(['statusCode', 200]);
    });
  });
  describe('Unlucky path', () => {
    let yourls: Yourls;
    beforeEach(() => {
      yourls = new Yourls( '','');
    });
    it('should return error on shourtUrl', async () => {
      const result = await yourls.generateUrl('www.google.es');
      expect(result).toBeUndefined();
    });
    it('should return error on expandUrl', async () => {
      const result = await yourls.expandUrl('');
      expect(result).toBeUndefined();
    });
  });
});
