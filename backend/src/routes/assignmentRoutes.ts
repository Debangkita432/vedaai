import express from "express";

import Assignment from "../models/Assignment";

import { assignmentQueue } from "../queues/assignmentQueue";

const router = express.Router();

router.get("/", async (_req, res) => {

  const assignments = await Assignment.find()
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    assignments,
  });

});

router.post("/create", async (req, res) => {

  const assignmentData = req.body;

  const assignment = await Assignment.create({
    ...assignmentData,
    status: "queued",
  });

  await assignmentQueue.add(
    "generate-paper",
    {
      assignmentId: assignment._id,
      ...assignmentData,
    }
  );

  res.status(200).json({
    success: true,
    message: "Assignment generation started",
    assignment,
  });

});

export default router;