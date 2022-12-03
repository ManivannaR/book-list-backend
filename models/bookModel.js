import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String },
  isbn: { type: String, unique: true },
  author: { type: String },
  description: { type: String },
  publishedDate: { type: Date },
  publisher: { type: String },
});

export default new mongoose.model("Book", bookSchema);
