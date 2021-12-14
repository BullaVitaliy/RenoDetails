import { configureStore } from "@reduxjs/toolkit";
import detailListReducer from './detailListSlicer' 

export default configureStore({
  reducer: {
    detailList: detailListReducer
  }
});