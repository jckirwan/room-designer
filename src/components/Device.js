import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import { GRID_DIMENSIONS_PIXEL } from "../constants/Room";

const Device = ({ dragHandlers, style, activeDrags, id, ...props }) => {
  const { devices } = useSelector((state) => state.room);
  const position = {
    x: devices[id]?.x,
    y: devices[id]?.y,
  };
  return (
    <Draggable
      bounds="parent"
      grid={GRID_DIMENSIONS_PIXEL}
      onStop={dragHandlers.onDrop}
      onDrag={dragHandlers.onDrag}
      {...dragHandlers}
      position={position}
    >
      <div
        className={`device ${activeDrags ? "no-pointer-events" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          border: "1px solid #999",
          borderRadius: 3,
          width: 25,
          height: 25,
          margin: 0,
          padding: 5,
          fontSize: 9,
          zIndex: 5,
          ...style,
        }}
        id={id}
      >
        {"c"}
      </div>
    </Draggable>
  );
};

export default Device;
