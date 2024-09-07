import request from 'supertest';
import { connect, connection } from 'mongoose';
import app from '../app';
import { deleteMany } from '../models/User';

// Connect to test database
beforeAll(async () => {
  const url = `mongodb://127.0.0.1/fit`; // get from .env
  await connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Clean up database after each test
afterEach(async () => {
  await deleteMany();
});

// Close database connection
afterAll(async () => {
  await connection.close();
});

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: '123456'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name');
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
