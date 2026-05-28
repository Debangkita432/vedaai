import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import { assignmentQueue } from "./queues/assignmentQueue";

import assignmentRoutes from "./routes/assignmentRoutes";

import "./workers/assignmentWorker";

dotenv.config();

require("./config/redis");

const startServer = async () => {

  await connectDB();

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use("/api/assignments", assignmentRoutes);

  app.get("/", (_req, res) => {
    res.send("VedaAI Backend Running");
  });

  app.get("/generate", async (_req, res) => {

    const job = await assignmentQueue.add(
      "generate-paper",
      {
        subject: "Science",
        class: "8",
      }
    );

    console.log("Job Added:", job.id);

    res.send(`Assignment Job Added: ${job.id}`);

  });

  const PORT = 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

};

startServer();