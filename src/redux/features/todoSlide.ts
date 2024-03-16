import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlide = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlide.reducer;
