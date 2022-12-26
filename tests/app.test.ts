import app from '../src/app';
import request from 'supertest';
import { redisClient } from '../src/config/redis';

describe("GET /", () => {
  it("return status code 200 if application started", async () => {
    const res = await request(app)
      .get("/")
    expect(res.statusCode).toEqual(200);
  })
  afterAll(async () => {
    await redisClient.quit();
  })
})