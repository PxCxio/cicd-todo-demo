const request = require('supertest');
const app = require('../index.js'); // Replace with your main app file path

describe('GET /todos', () => {
  it('responds with an array of todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

// Add more test cases for different functionalities

