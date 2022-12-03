import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});

export default new mongoose.model("User", userSchema);
