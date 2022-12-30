import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "./types/IBook";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (build) => ({
    // Books service
    getBooks: build.query<IBook[], void>({
      query: () => "/books",
      providesTags: ["Books"] as any,
    }),
    getBook: build.query<IBook[], void>({
      query: (id) => "/books/" + id,
    }),
    updateBook: build.mutation({
      query: (book) => {
        const { _id, ...body } = book;

        return {
          url: "/books/" + _id,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Books"] as any,
    }),

    // Genre services
    getGenre: build.query({
      query: (id) => "/genre/" + id,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useUpdateBookMutation,
  useGetGenreQuery,
} = api;
export default api;
