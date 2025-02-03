import mongoose, { mongo } from "mongoose";

//function to connect with database
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected at : ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error : ", error);
  }
};
