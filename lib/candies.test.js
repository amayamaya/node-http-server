import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad method', async () => {
  const { text, status } = await request(app)
  .patch('/api/v1/candies')
  .send({ value: 'nonsense' });
  expect (status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns a 200 on #GET candies', async () => {
  const { text, status } = await request(app)
  .patch('/api/v1/candies')
  .send({ value: 'nonsense' });
  expect (status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns a 200 on #POST candies', async () => {
  await request(app)
  .post('/api/v1/candies')
  .send({ name: 'Socks', age: 4, vibe: 'stylish' })
  .expect(200);
  await request(app).get('/api/v1/candies').expect(200);
});

it('Returns a 200 on #PUT candies', async () => {
  await request(app)
  .put('/api/v1/candies')
  .expect(200);
  await request(app)
  .get('/api/v1/candies')
  .expect(200);
  expect((res) => {
    res.body.data[0].species = 'candy';
  });
});

it('Returns a 204 on #DELETE candies', async () => {
  await request(app)
  .delete('/api/v1/candies')
  .expect(204);
});