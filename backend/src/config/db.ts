import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      console.error("Error: MONGO_URI is not defined in environment variables");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB Connected successfully");

  } catch (error) {

    console.error("MongoDB Connection Error:", error);

    process.exit(1);

  }
};