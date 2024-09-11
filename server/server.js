import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import sendMessage from "./sendMessage.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "client/dist")));

// Serve the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Define User schema and model
const userSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    Message: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

// POST request to send message
app.post("/api/sendMessage", async (req, res) => {
  const { Name, Email, Message } = req.body;

  try {
    const newUser = new userModel({
      Name,
      Email,
      Message,
    });

    // Save new user data
    await newUser.save();

    // Send email or notification
    await sendMessage(Name, Email, Message); // Adjust the arguments to match the sendMessage function

    res.status(201).send({ message: "Message sent successfully", newUser });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send({ error: "Error sending message" });
  }
});

// Start server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
