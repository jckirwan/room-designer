import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import { GRID_DIMENSIONS_PIXEL } from "../constants/Room";

const Device = ({
  dragHandlers,
  style,
  activeDrags,
  id,
  children,
  ...props
}) => {
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
      activeDrags={activeDrags}
      {...dragHandlers}
      position={position}
    >
      <div
        className={`device ${activeDrags ? "no-pointer-events" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          width: 25,
          margin: 0,
          zIndex: 5,
          ...style,
        }}
        id={id}
      >
        {children}
      </div>
    </Draggable>
  );
};

export const MeetingOwl3 = ({ id, activeDrags, dragHandlers }) => {
  return (
    <Device id={id} activeDrags={activeDrags} dragHandlers={dragHandlers}>
      <img
        draggable="false"
        id={id}
        src="assets/img/mop3.png"
        alt="Meeting Owl 3"
      />
    </Device>
  );
};

export const WhiteboardOwl = ({ id, activeDrags, dragHandlers }) => {
  return (
    <Device id={id} activeDrags={activeDrags} dragHandlers={dragHandlers}>
      <img draggable="false" src="assets/img/wbo.png" alt="Whiteboard Owl" />
    </Device>
  );
};

export const MeetingHQ = ({ id, activeDrags, dragHandlers }) => {
  return (
    <Device id={id} activeDrags={activeDrags} dragHandlers={dragHandlers}>
      <img draggable="false" src="assets/img/mhq.png" alt="Meeting HQ" />
    </Device>
  );
};

export default Device;
