import { Worker } from "bullmq";

import Assignment from "../models/Assignment";

console.log("Worker Started");

const worker = new Worker(
  "assignment-generation",

  async (job) => {

    console.log("Processing Assignment Job");

    console.log(job.data);

    await new Promise((resolve) =>
      setTimeout(resolve, 5000)
    );

    const generatedQuestions = [
      "Define electrolysis.",
      "Explain electroplating.",
      "What are electrolytes?",
    ];

    await Assignment.findByIdAndUpdate(
      job.data.assignmentId,
      {
        status: "completed",
        generatedQuestions,
      }
    );

    console.log("Assignment Generated");

    return true;

  },

  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} Completed`);
});

worker.on("failed", (_job, err) => {
  console.log("Job Failed", err);
});