const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  it('/signs should return a list of signs', async () => {
    const res = await request(app).get('/signs');
    const expected = [];
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
