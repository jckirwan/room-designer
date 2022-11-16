import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: [],
  furniture: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setDevices(state, action) {
      state.devices = action.payload;
    },
    setFurniture(state, action) {
      state.furniture = action.payload;
    },
  },
});

export const { setDevices, setFurniture } = roomSlice.actions;

export default roomSlice.reducer;
