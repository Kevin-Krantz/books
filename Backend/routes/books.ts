import { Book, validateBook as validate } from "../models/Book";
import { Genre } from "../models/Genre";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  return res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book)
    return res.status(404).send("The book with the given id was not found");

  return res.send(book);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre)
    return res.status(404).send("The genre with the given id was not found");

  let book = new Book({
    title: req.body.title,
    author: req.body.author,
    genreName: req.body.genreName,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberPages: req.body.numberPages,
    numberInStock: req.body.numberInStock,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    dateIssued: req.body.dateIssued,
  });

  book = await book.save();
  return res.send(book);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre)
    return res.status(404).send("The genre with the given id was not found");

  const book = await Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    genreName: req.body.genreName,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberPages: req.body.numberPages,
    numberInStock: req.body.numberInStock,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    dateIssued: req.body.dateIssued,
  });

  if (!book)
    return res.status(404).send("The book with the given id was not found.");

  return res.send(book);
});

router.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book)
    return res.status(404).send("The book with the given id was not found");

  return res.send(book);
});

export default router;
