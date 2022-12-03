import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/login/:email", async (req, res) => {
  const data = await User.findOne({ email: req.params.email });
  if (!data) {
    res.status(400).json({ status: "Failed", message: "Incorrect Email" });
  } else {
    res.status(200).json({ status: "Success", data: data });
  }
});

router.post("/register", async (req, res) => {
  await User.create(req.body);
  res.status(200).json({ status: "Success" });
});

export default router;
