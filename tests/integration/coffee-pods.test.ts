import request from 'supertest';
import App from '../../src/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Coffee pods filters', () => {
  it('should filter with all large pods => return 10 pods', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-pods/filter')
      .query({
        product_type: 0 // large pod
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(10);
      });
  });

  it('should filter with all vanilla espresso pods => return 3 pods', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-pods/filter')
      .query({
        product_type: 2, // espresso pod
        coffee_flavor: 0, // vanilla
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(3);
      });
  });

  it('should filter with all small pods => return 10 pods', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-pods/filter')
      .query({
        product_type: 1 // small pod
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(10);
      });
  });

  it('should filter with all pods sold in 7 dozen packs => return 2 pods', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-pods/filter')
      .query({
        pack_size: 3 // 7 dozen pack
      })
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body.length).toBe(2);
      });
  });

  it('should fail with validation error if passed wrong query parameter', () => {
    const { app } = new App();
    return request(app)
      .get('/coffee-pods/filter')
      .query({
        not_allowed_filter: 0
      })
      .then((res) => {
        const { status } = res;
        expect(status).toBe(422);
      });
  });
});
