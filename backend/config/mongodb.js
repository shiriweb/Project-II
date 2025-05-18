import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "yarncreation",  // Specify the database name here
      serverSelectionTimeoutMS: 30000,  // 30 seconds
    });

    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error("DB connection error:", err);
  });
};

export default connectDB;
