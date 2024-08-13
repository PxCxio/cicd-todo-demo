const request = require('supertest');
const app = require('../index');

describe('Todo Routes', () => {
  it('should get all todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new todo', async () => {
    const newTodo = { text: 'Test Todo' };
    const response = await request(app).post('/todos').send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(newTodo);
  });

  // Add more test cases for other functionalities
});

