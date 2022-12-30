import { Genre, validateGenre as validate } from "../models/Genre";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genre = new Genre({ name: req.body.name });
  await genre.save();

  res.send(genre);
});

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  console.log(genres);
  return res.send(genres);
});

router.get("/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre)
    return res.status(404).send("The genre with the given id was not found.");

  return res.send(genre);
});

export default router;
