import { Worker } from "bullmq";

import Assignment from "../models/Assignment";

import {
  generateQuestionsWithAI,
} from "../services/geminiService";

import {
  extractTextFromPDF,
} from "../services/pdfService";

import {
  generateAssignmentPDF,
} from "../services/pdfGenerator";

console.log("Worker Started");

const worker = new Worker(
  "assignment-generation",

  async (job) => {

    try {

      console.log(
        "Processing Assignment Job"
      );

      console.log(job.data);

      const assignment =
        await Assignment.findById(
          job.data.assignmentId
        );

      if (!assignment) {

        throw new Error(
          "Assignment not found"
        );

      }

      let extractedText = "";

      if (assignment.uploadedFile) {

        extractedText =
          await extractTextFromPDF(
            assignment.uploadedFile
          );

      }

      const aiResponse =
        await generateQuestionsWithAI(
          extractedText ||
            `${job.data.subject} ${job.data.topic}`,
          job.data.topic,
          job.data.difficulty
        );

      let generatedQuestions:
        string[] = [];

      try {

        generatedQuestions =
          JSON.parse(aiResponse);

      } catch {

        generatedQuestions = [
          aiResponse,
        ];

      }

      const pdfPath =
        await generateAssignmentPDF({
          ...assignment.toObject(),
          generatedQuestions,
        });

      await Assignment.findByIdAndUpdate(
        job.data.assignmentId,
        {
          status: "completed",

          generatedQuestions,

          generatedPdf: pdfPath,
        }
      );

      console.log(
        "AI Assignment Generated"
      );

      console.log(
        "PDF Generated:",
        pdfPath
      );

      return true;

    } catch (error) {

      console.log(
        "Worker Error:",
        error
      );

      await Assignment.findByIdAndUpdate(
        job.data.assignmentId,
        {
          status: "failed",
        }
      );

      throw error;

    }

  },

  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);

worker.on("completed", (job) => {

  console.log(
    `Job ${job.id} Completed`
  );

});

worker.on("failed", (_job, err) => {

  console.log(
    "Job Failed",
    err
  );

});