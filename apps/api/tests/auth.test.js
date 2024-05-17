const request = require('supertest');
const app = require('../src/index');
const { access } = require('fs');

describe('/auth', () => {
  describe('POST /login', () => {
    it('User login with valid email & password', async () => {
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

describe('/auth', () => {
  describe('POST /login', () => {
    it('User Login with invalid email & password', async () => {
      const res = await request(app).post('/auth/login').send({
        email: 'wulan@test.com',
        password: 'wulanabc',
      });
      console.log(res.body);
      expect(res.statusCode).toBe(500);
    });
  });
});

describe('/register', () => {
  describe('POST /user', () => {
    it('User register with invalid referral code', async () => {
      const res = await request(app).post('/register/user').send({
        firstName: 'Hanief',
        lastName: 'Bunyiep',
        username: 'hanief',
        email: 'hanief@test.com',
        password: 'hanief123',
        memberCode: 'abc123',
      });
      console.log(res.body);
      expect(res.statusCode).toBe(500);
    });
  });
});
