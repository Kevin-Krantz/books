import { IGenre } from "./IGenre";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genreName: string;
  genre: IGenre;
  numberPages: number;
  numberInStock: number;
  imgUrl: string;
  dateIssued: Date;
}
