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
        const result = await yourls.expandUrl(short && short.shorturl || '');
        expect(result)
          .toBeDefined()
          .toContainKey('longurl')
          .toContainEntry(['statusCode', 200]);
      });
  });
  xdescribe('Unlucky path', () => {
    it('should shortUrl', () => {
      console.log(process.env.API_KEY);
      expect(1).toBe(1);
    });
  });
});
