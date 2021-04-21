const request = require('supertest');
const app = require('../app');
const db = require('../db/connection');

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  db.destroy();
});

describe('/api/categories', () => {
  it('GET 200 - responds with an array of categories', async () => {
    const { body } = await request(app).get('/api/categories').expect(200);
    expect(body.categories).toBeArray();
    expect(body.categories.length).toBe(3);
    body.categories.forEach((category) => {
      expect(category).toEqual(
        expect.objectContaining({
          category_name: expect.any(String),
        })
      );
    });
  });
  it('POST 201 - responds with the created category', async () => {
    const { body } = await request(app)
      .post('/api/categories')
      .send({ category_name: 'Antiques' })
      .expect(201);

    expect(body.category).toEqual(
      expect.objectContaining({
        category_name: 'Antiques',
      })
    );
  });
  it('POST 400 - when missing required keys', async () => {
    const { body } = await request(app)
      .post('/api/categories')
      .send({})
      .expect(400);
    expect(body.msg).toBe('category_name is a required field');
  });
});

describe('/api/users', () => {
  it('GET 200 - responds with an array of users', async () => {
    const { body } = await request(app).get('/api/users').expect(200);
    expect(body.users).toBeArray();
    expect(body.users.length).toBe(4);
    body.users.forEach((user) => {
      expect(user).toEqual(
        expect.objectContaining({
          username: expect.any(String),
          avatar_url: expect.any(String),
        })
      );
    });
  });
  it('POST 201 - responds with the created user', async () => {
    const { body } = await request(app)
      .post('/api/users')
      .send({ username: 'Doug', avatar_url: 'https://test.com/doug.jpg' })
      .expect(201);

    expect(body.user).toEqual(
      expect.objectContaining({
        username: 'Doug',
        avatar_url: 'https://test.com/doug.jpg',
      })
    );
  });
});