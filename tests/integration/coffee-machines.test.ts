import request from 'supertest';
import App from '../../src/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Coffee machines filters', () => {
  it('should filter with all large machines => return 3 machines', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-machines/filter')
      .query({
        product_type: 0 // large machine
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(3);
      });
  });

  it('should filter with all espresso machines => return 3 machines', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-machines/filter')
      .query({
        product_type: 2 // espresso machine
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(3);
      });
  });

});
