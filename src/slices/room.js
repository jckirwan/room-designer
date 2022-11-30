import { createSlice } from "@reduxjs/toolkit";
import { FOOT } from "../constants/Room";
import { v4 as uuidv4 } from "uuid";
import {
  DEVICE_TYPES,
  DEVICE_DIMENSIONS,
  FURNITURE_TYPES,
  FURNITURE_DIMENSIONS,
} from "../constants/Room";

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

const createItem = ({ type, dimensions, roomWidth, roomLength }) => {
  const id = uuidv4();

  const centeredCoordinates = centeredInRoom({
    roomWidth,
    roomLength,
    width: dimensions[type].width,
    height: dimensions[type].height,
  });

  return {
    id,
    type: type,
    ...centeredCoordinates,
  };
};

const initialState = {
  roomWidth: 20,
  roomLength: 10,
  devices: {},
  furniture: {},
  videoRangesEnabled: false,
  audioRangesEnabled: false,
  lightMode: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    toggleVideoRanges(state) {
      state.videoRangesEnabled = !state.videoRangesEnabled;
    },
    toggleAudioRanges(state) {
      state.audioRangesEnabled = !state.audioRangesEnabled;
    },
    toggleLightMode(state) {
      state.lightMode = !state.lightMode;
    },
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
    createHuddleRoom(state) {
      state.devices = {};
      state.furniture = {};
      state.roomLength = 10;
      state.roomWidth = 10;
      const smallTable = createItem({
        type: FURNITURE_TYPES.TABLE_SMALL,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const tv = createItem({
        type: FURNITURE_TYPES.SCREEN,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const meetingOwl3 = createItem({
        type: DEVICE_TYPES.MEETING_OWL_3,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const meetingHQ = createItem({
        type: DEVICE_TYPES.MEETING_HQ,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const whiteboard = createItem({
        type: FURNITURE_TYPES.WHITEBOARD,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const whiteboardOwl = createItem({
        type: DEVICE_TYPES.WHITEBOARD_OWL,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      state.furniture[smallTable.id] = {
        ...smallTable,
      };
      state.furniture[tv.id] = {
        ...tv,
        x: 0,
        y: 180,
      };
      state.devices[meetingOwl3.id] = {
        ...meetingOwl3,
      };
      state.devices[meetingHQ.id] = {
        ...meetingHQ,
        y: 250,
      };
      state.devices[whiteboardOwl.id] = {
        ...whiteboardOwl,
        x: -10,
        y: 280,
        rotation: 270,
      };
      state.furniture[whiteboard.id] = {
        ...whiteboard,
        x: 480,
        y: 200,
        rotation: 180,
      };
    },
    createConferenceRoom(state) {
      state.devices = {};
      state.furniture = {};
      state.roomLength = 15;
      state.roomWidth = 20;
      const mediumTable = createItem({
        type: FURNITURE_TYPES.TABLE_MEDIUM,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const tv = createItem({
        type: FURNITURE_TYPES.SCREEN,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const whiteboard = createItem({
        type: FURNITURE_TYPES.WHITEBOARD,
        dimensions: FURNITURE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const meetingOwl3 = createItem({
        type: DEVICE_TYPES.MEETING_OWL_3,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const secondMeetingOwl3 = createItem({
        type: DEVICE_TYPES.MEETING_OWL_3,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const whiteboardOwl = createItem({
        type: DEVICE_TYPES.WHITEBOARD_OWL,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      const meetingHQ = createItem({
        type: DEVICE_TYPES.MEETING_HQ,
        dimensions: DEVICE_DIMENSIONS,
        roomWidth: state.roomWidth,
        roomLength: state.roomLength,
      });
      state.furniture[mediumTable.id] = {
        ...mediumTable,
      };
      state.furniture[tv.id] = {
        ...tv,
        x: 0,
        y: 280,
      };
      state.furniture[whiteboard.id] = {
        ...whiteboard,
        x: 490,
        y: -90,
        rotation: 90,
      };
      state.devices[meetingOwl3.id] = {
        ...meetingOwl3,
        x: 320,
      };
      state.devices[secondMeetingOwl3.id] = {
        ...secondMeetingOwl3,
        x: 630,
      };
      state.devices[whiteboardOwl.id] = {
        ...whiteboardOwl,
        x: 480,
        y: 710,
        rotation: 180,
      };
      state.devices[meetingHQ.id] = {
        ...meetingHQ,
        x: 320,
        y: 380,
      };
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
  toggleVideoRanges,
  toggleAudioRanges,
  toggleLightMode,
  createHuddleRoom,
  createConferenceRoom,
} = roomSlice.actions;

export default roomSlice.reducer;
