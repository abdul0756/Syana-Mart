import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        if (mongoose.connection.readyState === 1) return;
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "syana-mart" });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
