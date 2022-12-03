import express, { query } from "express";
import Book from "../models/bookModel.js";

const router = express.Router();

router.get("/add", async (req, res) => {
  const data = await Book.find({});
  res.status(200).json({
    status: "Success",
    data: data,
  });
});

router.get("/book/:title", async (req, res) => {
  const data = await Book.findOne({ title: req.params.title });
  res.status(200).json({
    status: "Success",
    data: data,
  });
});

router.post("/add", async (req, res) => {
  try {
    const { title, isbn, author, description, publishedDate, publisher } =
      req.body;

    const newBook = new Book({
      title,
      isbn,
      author,
      description,
      publishedDate,
      publisher,
    });

    await newBook.save();

    res.status(200).json({
      status: "Success",
      message: "Data stored in Database",
    });
  } catch (e) {
    res.json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.put("/edit/:id", async (req, res) => {
  const update = await Book.updateOne({ _id: req.params.id }, req.body);
  res.status(200).json({
    status: "Success",
    message: "Record Edited",
  });
});

router.delete("/book/:id", async (req, res) => {
  const book = await Book.deleteOne({ _id: req.params.id });
  res.status(200).json({
    status: "Success",
    message: "Record Deleted",
  });
});

export default router;
