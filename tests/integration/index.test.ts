import { appConfig } from './../../src/config';
import request from 'supertest';
import App from '../../src/app';

const { version, name: appName } = appConfig;

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Smoke test Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const { app } = new App();
      return request(app)
        .get('/')
        .then((res) => {
          const { body, status } = res;
          const { version: resVersion, message } = body;
          expect(status).toBe(200);
          expect(resVersion).toBe(version);
          expect(message).toBe(`Welcome to ${appName}`);
        });
    });
  });
});
