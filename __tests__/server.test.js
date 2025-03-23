const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

describe('Server Routes', () => {
  test('GET / should serve index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});