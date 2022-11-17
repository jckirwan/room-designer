export const GRID_UNIT_PIXEL = 10;
export const GRID_DIMENSIONS_PIXEL = [GRID_UNIT_PIXEL, GRID_UNIT_PIXEL];
export const FOOT = GRID_UNIT_PIXEL * 5;
export const BORDER_SIZE = 2;
export const DEFAULT_ROOM_SIZE = 10;

export const DEVICE_TYPES = {
  MEETING_OWL_3: "meeting-owl-3",
  WHITEBOARD_OWL: "whiteboard-owl",
  MEETING_HQ: "meeting-hq",
  EXPANSION_MIC: "expansion-mic",
};

export const DEVICE_DIMENSIONS = {
  [DEVICE_TYPES.MEETING_OWL_3]: {
    width: FOOT,
    height: FOOT,
  },
  [DEVICE_TYPES.WHITEBOARD_OWL]: {
    width: FOOT,
    height: FOOT,
  },
  [DEVICE_TYPES.MEETING_HQ]: {
    width: FOOT,
    height: FOOT,
  },
  [DEVICE_TYPES.EXPANSION_MIC]: {
    width: FOOT,
    height: FOOT,
  },
};

export const FURNITURE_TYPES = {
  TABLE_SMALL: "table-small",
  TABLE_MEDIUM: "table-medium",
  TABLE_LARGE: "table-large",
  CHAIR: "chair",
  SCREEN: "screen",
  PODIUM: "podium",
  WHITEBOARD: "whiteboard",
};

export const FURNITURE_DIMENSIONS = {
  [FURNITURE_TYPES.TABLE_LARGE]: {
    width: 16 * FOOT,
    height: 4 * FOOT,
  },
  [FURNITURE_TYPES.TABLE_MEDIUM]: {
    width: 12 * FOOT,
    height: 4 * FOOT,
  },
  [FURNITURE_TYPES.TABLE_SMALL]: {
    width: 8 * FOOT,
    height: 4 * FOOT,
  },
  [FURNITURE_TYPES.CHAIR]: {
    width: 2 * FOOT,
    height: 2 * FOOT,
  },
  [FURNITURE_TYPES.SCREEN]: {
    width: 20,
    height: 200,
  },
  [FURNITURE_TYPES.PODIUM]: {
    width: 2 * FOOT,
    height: 1.5 * FOOT,
  },
  [FURNITURE_TYPES.WHITEBOARD]: {
    width: 20,
    height: 200,
  },
};
