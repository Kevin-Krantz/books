import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sidebar",
  initialState: { isOpen: false },
  reducers: {
    setToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const getIsOpen = (state: any) => state.entities.sidebar;

export const { setToggle } = slice.actions;
export default slice.reducer;
