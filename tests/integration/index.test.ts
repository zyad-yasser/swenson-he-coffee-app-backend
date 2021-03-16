import request from 'supertest';
import App from '../../src/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Smoke test Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const { app } = new App();
      return request(app)
        .get('/')
        .expect(200);
    });
  });
});
