import { createSlice } from '@reduxjs/toolkit'

export const carListSlice =  createSlice({
    name: 'carListSlice',
    initialState: { value: []},
    reducers: {
        setDetail(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setDetail } = carListSlice.actions;
export default carListSlice.reducer;