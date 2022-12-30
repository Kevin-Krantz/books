import mongoose, { Schema, Model } from "mongoose";
import Joi from "joi";
import { IGenre } from "types/IGenre";

const genreSchema = new Schema<IGenre>({
  name: { type: String, required: true },
});

const Genre: Model<IGenre> = mongoose.model("genre", genreSchema);

const validateGenre = (genre: IGenre) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(genre);
};

export { validateGenre, Genre, genreSchema };
