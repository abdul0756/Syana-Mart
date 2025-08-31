import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    fullname: String,
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: String,
    cnic: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", User);