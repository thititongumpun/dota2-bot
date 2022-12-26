import app from '../../src/app';
import request from 'supertest';
import { redisClient } from "../../src/config/redis";

describe("GET /profile/{playerId}", () => {
  it("return status code 200 if profile response", async () => {
    const res = await request(app)
      .get("/profile/419877401")
    expect(res.statusCode).toEqual(200);
  })
  afterAll(async () => {
    await redisClient.quit();
  })
})