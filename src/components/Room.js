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
      className={`relative  bg-white dark:bg-gray-900`}
      style={{
        /* Account for borders on width/height */
        width: roomWidth * FOOT + BORDER_SIZE,
        height: roomHeight * FOOT + BORDER_SIZE,
        backgroundImage:
          "repeating-linear-gradient(#adadad 0 1px,transparent 1px 100%),repeating-linear-gradient(90deg, #adadad 0 1px, transparent 1px 100%)",
        backgroundSize: `${GRID_UNIT_PIXEL}px ${GRID_UNIT_PIXEL}px `,
        
      }}
    >
      <div className="w-full h-full drop-target">{children}</div>
    </div>
  );
};

export default Room;
