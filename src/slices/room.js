import { createSlice } from "@reduxjs/toolkit";
import { FOOT } from "../constants/Room";
import { v4 as uuidv4 } from "uuid";

const centeredInRoom = ({ roomWidth, roomLength, width, height }) => {
  const x = (roomWidth * FOOT) / 2;
  const y = (roomLength * FOOT) / 2;

  const minusHalfX = width / 2;
  const minusHalfY = height / 2;

  return {
    x: x - minusHalfX,
    y: y - minusHalfY,
  };
};

const initialState = {
  roomWidth: 20,
  roomLength: 10,
  devices: {},
  furniture: {},
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addDevice(state, action) {
      const {
        id = uuidv4(),
        type,
        width,
        height,
        rotation = 0,
        x,
        y,
      } = action.payload;
      const centeredCoordinates = centeredInRoom({
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
        width,
        height,
      });
      state.devices[id] = {
        id,
        rotation,
        type,
        x,
        y,
        ...centeredCoordinates,
      };
    },
    removeDevice(state, action) {
      delete state.devices[action.payload];
    },
    addFurniture(state, action) {
      const {
        id = uuidv4(),
        type,
        width,
        height,
        rotation = 0,
        x,
        y,
      } = action.payload;
      const centeredCoordinates = centeredInRoom({
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
        width,
        height,
      });
      state.furniture[id] = {
        id,
        rotation,
        type,
        x,
        y,
        ...centeredCoordinates,
      };
    },
    removeFurniture(state, action) {
      delete state.furniture[action.payload];
    },
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
      state.roomLength = initialState.roomLength;
      state.roomWidth = initialState.roomWidth;
    },
    setRoomWidth(state, action) {
      state.roomWidth = Number(action.payload);
    },
    setRoomLength(state, action) {
      state.roomLength = Number(action.payload);
    },
  },
});

export const {
  updateDeviceRotation,
  updateFurnitureRotation,
  updateDeviceCoordinates,
  updateFurnitureCoordinates,
  resetRoom,
  addDevice,
  removeDevice,
  addFurniture,
  removeFurniture,
  setRoomWidth,
  setRoomLength,
} = roomSlice.actions;

export default roomSlice.reducer;
