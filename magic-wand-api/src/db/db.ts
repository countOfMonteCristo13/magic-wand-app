import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default db;
