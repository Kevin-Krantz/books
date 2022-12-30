import axios from "axios";
import { apiCallFailed, apiCallSucceeded } from "../api";
import { Store, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IApiCallBeganPayload } from "../types/IApi";

export const api =
  (store: Store) =>
  (next: Dispatch) =>
  async (action: PayloadAction<IApiCallBeganPayload>) => {
    if (action.type !== "api/callBegan") return next(action);

    const { dispatch } = store;
    const { url, method, data, onStart, onSuccess, onFailed }: any =
      action.payload; // ändra från any till payloaden. På något jävla sätt.

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: "http://localhost:8000/api",
        url,
        method,
        data,
      });

      dispatch(apiCallSucceeded(response.data));

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      dispatch(apiCallFailed(error));

      if (onFailed) {
        dispatch({ type: onFailed, payload: error });
      }
    }
  };
