import { createAction, PayloadAction } from "@reduxjs/toolkit";

export interface IApiCallBeganPayload {
  url: string;
  method: string;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onFailed?: string;
}

export const apiCallBegan =
  createAction<PayloadAction<IApiCallBeganPayload>>("api/callBegan");
