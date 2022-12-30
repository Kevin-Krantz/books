import { configureStore } from "@reduxjs/toolkit";
// import { api } from "./middleware/api";
import api from "./rtkApi";
import reducer from "./reducer";

const initStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api.middleware,
    ],
  });

const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default initStore;
