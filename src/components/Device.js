import React from "react";
import Draggable from "react-draggable";
import { GRID_DIMENSIONS_PIXEL } from "../constants/Room";

const Device = ({ dragHandlers, style, activeDrags, id, ...props }) => {
  return (
    <Draggable
      bounds="parent"
      grid={GRID_DIMENSIONS_PIXEL}
      onStop={dragHandlers.onDrop}
      onDrag={dragHandlers.onDrag}
      {...dragHandlers}
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
