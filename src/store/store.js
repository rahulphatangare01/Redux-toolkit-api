import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./Slice/getuserSlice";
export const store = configureStore({
  reducer: { app: userDetail },
});
