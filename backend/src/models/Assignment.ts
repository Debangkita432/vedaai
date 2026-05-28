import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    className: {
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

    uploadedFile: {
      type: String,
      default: "",
    },

    generatedPdf: {
      type: String,
      default: "",
    },

  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Assignment = mongoose.model(
  "Assignment",
  assignmentSchema
);

export default Assignment;