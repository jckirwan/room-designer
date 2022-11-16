import { configureStore } from "@reduxjs/toolkit";
import room from "./slices/room";

export const store = configureStore({
  reducer: {
    room,
  },
});
