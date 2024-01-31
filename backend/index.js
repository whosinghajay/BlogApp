import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); //is a middleware function that is used to parse JSON data sent in the request body.

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);
