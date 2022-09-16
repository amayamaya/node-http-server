import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad cat', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

//crud tests for cats routes here
//create other test files for future (resources?)