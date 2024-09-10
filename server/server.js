import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import sendMessage from "./sendMessage.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log("Error connecting to mongodb: ", err));

const userSchema = mongoose.Schema(
  {
    Name: String,
    Email: String,
    Message: String,
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
app.post("/api/sendMessage", (req, res) => {
  const { Name, Email, Message } = req.body;
  try {
    const newUser = new userModel({
      Name,
      Email,
      Message,
    });
    newUser.save();
    sendMessage("sdf", "achyutthapa@gmail.com", "df");
    res.status(201).send({ message: "Message sent successfully", newUser });
  } catch (error) {
    console.log("Error sending  message: " + error);
    res.status(500).send("Error sending message" + error);
  }
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
