const {getResponse} = require('./responseApi')

  describe('test fetch', () => {
    test('Typeof data fetch', async () => {
        const data = await getResponse('Minsk');
        expect(typeof data).toBe('object');
      });
  });