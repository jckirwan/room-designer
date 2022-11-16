import React from "react";
import {
  BORDER_SIZE,
  DEFAULT_ROOM_SIZE,
  FOOT,
  GRID_UNIT_PIXEL,
} from "../constants/Room";

const Room = ({ width, height, children, ...props }) => {
  const roomHeight = height || DEFAULT_ROOM_SIZE;
  const roomWidth = width || DEFAULT_ROOM_SIZE;

  return (
    <div
      style={{
        position: "relative",
        /* Account for borders on width/height */
        width: roomWidth * FOOT + BORDER_SIZE,
        height: roomHeight * FOOT + BORDER_SIZE,
        backgroundImage:
          "repeating-linear-gradient(#eee 0 1px,transparent 1px 100%),repeating-linear-gradient(90deg, #eee 0 1px, transparent 1px 100%)",
        backgroundSize: `${GRID_UNIT_PIXEL}px ${GRID_UNIT_PIXEL}px `,
        backgroundColor: "#fff",
        border: "1px solid grey",
      }}
    >
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Room;
