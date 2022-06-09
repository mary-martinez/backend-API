const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/signs should return a list of signs', async () => {
    const res = await request(app).get('/signs');
    const expected = [{ word: 'More', introduced: true }, { word: 'Finish', introduced: true }, { word: 'Milk', introduced: true }, { word: 'Pain', introduced: true }, { word: 'Potty', introduced: true }, { word: 'Eat', introduced: false }, { word: 'Thank you', introduced: false }, { word: 'Sleep', introduced: false }, { word: 'I love you', introduced: true }];
    expect(res.body).toEqual(expected);
  });
  it('/sign/2 should return details for the sign finish', async () => {
    const res = await request(app).get('/signs/2');
    const expected = {
      id: '2',
      word: 'Finish',
      aka: 'All done',
      url: 'https://www.youtube.com/watch?v=v3ncKPr_8ro',
      introduced: true,
      proficiency: 10
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
