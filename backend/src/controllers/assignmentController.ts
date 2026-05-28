import { Request, Response } from "express";

import Assignment from "../models/Assignment";

import { assignmentQueue } from "../queues/assignmentQueue";

export const createAssignment = async (
  req: Request,
  res: Response
) => {
  try {

    const {
      subject,
      className,
      topic,
      difficulty,
    } = req.body;

    const assignment = await Assignment.create({
      subject,
      className,
      topic,
      difficulty,
      status: "processing",
      generatedQuestions: [],
    });

    await assignmentQueue.add(
      "generate-paper",
      {
        assignmentId: assignment._id,
        subject,
        className,
        topic,
        difficulty,
      }
    );

    res.status(201).json({
      success: true,
      message: "Assignment generation started",
      assignment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

export const getAssignments = async (
  _req: Request,
  res: Response
) => {
  try {

    const assignments = await Assignment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      assignments,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};