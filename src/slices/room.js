import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: {
    "owl-1": {
      type: "MOP",
      rotation: 0,
      x: 0,
      y: 0,
    },
  },
  furniture: {
    "table-1": {
      type: "table",
      rotation: 0,
      x: 0,
      y: 0,
    },
    "chair-1": {
      type: "chair",
      rotation: 0,
      x: 0,
      y: 0,
    },
    "tv-1": {
      type: "tv",
      rotation: 0,
      x: 0,
      y: 0,
    },
  },
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateDeviceRotation(state, action) {
      const { id, rotation } = action.payload;
      state.devices[id] = {
        ...state.devices[id],
        rotation,
      };
    },
    updateDeviceCoordinates(state, action) {
      const { id, x, y } = action.payload;
      state.devices[id] = {
        ...state.devices[id],
        x,
        y,
      };
    },
    updateFurnitureRotation(state, action) {
      const { id, rotation } = action.payload;
      state.furniture[id] = {
        ...state.furniture[id],
        rotation,
      };
    },
    updateFurnitureCoordinates(state, action) {
      const { id, x, y } = action.payload;
      state.furniture[id] = {
        ...state.furniture[id],
        x,
        y,
      };
    },
    resetRoom(state) {
      state.devices = initialState.devices;
      state.furniture = initialState.furniture;
    }
  },
});

export const {
  updateDeviceRotation,
  updateFurnitureRotation,
  updateDeviceCoordinates,
  updateFurnitureCoordinates,
  resetRoom
} = roomSlice.actions;

export default roomSlice.reducer;
