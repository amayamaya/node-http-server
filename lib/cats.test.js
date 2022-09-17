import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad method', async () => {
  const { text, status } = await request(app)
  .patch('/api/v1/cats')
  .send({ value: 'nonsense' });
  expect (status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns a 200 on #GET cats', async () => {
  const { text, status } = await request(app)
  .patch('/api/v1/cats')
  .send({ value: 'nonsense' });
  expect (status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns a 200 on #POST cats', async () => {
  await request(app)
  .post('/api/v1/cats')
  .send({ name: 'Socks', age: 4, vibe: 'stylish' })
  .expect(200);
  await request(app).get('/api/v1/cats').expect(200);
});

//crud tests for cats routes here
//create other test files for future (resources?)