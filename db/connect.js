import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Yes, I am connected to the database.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
};

export default connectDB;