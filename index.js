import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", bookRoutes);
app.use("/", userRoutes);

await mongoose.connect(
  "mongodb+srv://random:random123@cluster0.w0bqo42.mongodb.net/?retryWrites=true&w=majority"
);

console.log("Connected to Database");

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
