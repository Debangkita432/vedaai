import { Queue } from "bullmq";
import { redisConfig } from "../config/redis";

export const assignmentQueue = new Queue("assignment-generation", {
  connection: redisConfig,
});