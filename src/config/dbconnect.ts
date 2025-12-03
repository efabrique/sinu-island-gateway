import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/sinu_files");
    console.log("MongoDB Connected ✔");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
};
