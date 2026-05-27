import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redisConfig = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null,
};

export const redis = new Redis(redisConfig);

redis.on("connect", () => {
  console.log("Redis Connected successfully");
});

redis.on("error", (err) => {
  console.error("Redis Connection Error:", err);
});