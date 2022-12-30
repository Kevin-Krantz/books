export interface IProduct {
  _id: string;
  title: string;
  author: string;
  genre: IGenre;
  numberPages: number;
  numberInStock: number;
  imgUrl?: string;
  dateIssued: Date;
}

interface IGenre {
  _id: string;
  name: string;
}
