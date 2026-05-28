import express from "express";

import Assignment from "../models/Assignment";

import { assignmentQueue } from "../queues/assignmentQueue";

import { upload } from "../middleware/upload";

const router = express.Router();

router.get("/", async (_req, res) => {

  const assignments =
    await Assignment.find()
      .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    assignments,
  });

});

router.delete(
  "/:id",

  async (req, res) => {

    try {

      await Assignment.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        success: true,

        message:
          "Assignment deleted successfully",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to delete assignment",

      });

    }

  }
);

router.post(
  "/create",

  upload.single("file"),

  async (req, res) => {

    try {

      const assignmentData = req.body;

      const uploadedFile =
        req.file
          ? req.file.path
          : "";

      const assignment =
        await Assignment.create({

          ...assignmentData,

          uploadedFile,

          status: "queued",

        });

      await assignmentQueue.add(
        "generate-paper",
        {
          assignmentId:
            assignment._id,

          ...assignmentData,
        }
      );

      res.status(200).json({

        success: true,

        message:
          "Assignment generation started",

        assignment,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Something went wrong",

      });

    }

  }
);

export default router;