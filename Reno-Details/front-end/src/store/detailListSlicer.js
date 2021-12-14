import { createSlice } from "@reduxjs/toolkit";

export const detailListSlicer = createSlice({
  name: "detailListSlicer",
  initialState: {
    value: [] ,
  },
  reducers: {
    setList(state, action) {
        state.value = action.payload
    },
  },
});

export const {setList} = detailListSlicer.actions;
export default detailListSlicer.reducer;
