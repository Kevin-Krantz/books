import cors from "cors";
import genres from "./routes/genres";
import books from "./routes/books";
import auth from "./routes/auth";
import users from "./routes/users";
import mongoose from "mongoose";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/auth", auth);
app.use("/api/books", books);
app.use("/api/users", users);

mongoose
  .connect("mongodb://localhost/books")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.listen(8000, () => console.log("Listening on port 8000"));
