import mongoose, { Schema, Model } from "mongoose";
import Joi from "joi";
import { genreSchema } from "./Genre";
import { IBook } from "types/IBook";

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genreName: String,
  genre: {
    type: genreSchema,
    required: true,
  },
  numberPages: Number,
  numberInStock: Number,
  imgUrl: { type: String, required: true },
  dateIssued: { type: Date, default: Date.now() },
});

const Book: Model<IBook> = mongoose.model("Book", bookSchema);

function validateBook(book: IBook) {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genreId: Joi.string().required(),
    numberPages: Joi.number().required(),
    numberInStock: Joi.number().required(),
    imgUrl: Joi.string().required(),
    dateIssued: Joi.date(),
  });
  return schema.validate(book);
}

export { validateBook, Book };
