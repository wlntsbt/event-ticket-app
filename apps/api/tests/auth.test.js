const request = require('supertest');
const app = require('../src/index');
const { access } = require('fs');

describe('/auth', () => {
  describe('POST /login', () => {
    it('User Login with Valid Email & Password', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'wulan@test.com',
        password: 'wulan123',
      });
      console.log(res.body);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual({
        accesstoken: expect.any(String),
        uid: expect.any(String),
        username: expect.any(String),
        role: expect.any(String),
      });
    });
  });
});
