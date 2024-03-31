import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterType {
  type: string;
  search: string;
  size: string;
}

const initialState = {
  type: "",
  search: "",
  size: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      state.type = action.payload?.type;
      state.search = action.payload?.search;
      state.size = action.payload?.size;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
