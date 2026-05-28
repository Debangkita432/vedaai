import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "processing",
    },

    generatedQuestions: {
      type: Array,
      default: [],
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "Assignment",
  assignmentSchema
);