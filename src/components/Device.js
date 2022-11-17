import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import {
  GRID_DIMENSIONS_PIXEL,
  DEVICE_DIMENSIONS,
  DEVICE_TYPES,
} from "../constants/Room";
import { Menu, MenuItem } from "../components/Menu";
import { RotateCw, RotateCcw, Copy, Trash2 } from "react-feather";
import { getNextRotation, getPreviousRotation } from "../utils";
import { addDevice, removeDevice, updateDeviceRotation } from "../slices/room";

const Device = ({
  dragHandlers,
  style,
  id,
  width,
  height,
  children,
  ...props
}) => {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.room);
  const [menuOpen, setMenuOpen] = useState(false);
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
      cancel=".menu"
      position={position}
    >
      <div
        id={id}
        className={`device`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          ...style,
          width,
          height,
          background: "none",
        }}
        onMouseEnter={() => {
          setMenuOpen(true);
        }}
        onMouseLeave={() => {
          setMenuOpen(false);
        }}
      >
        <div
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            rotate: `${devices[id]?.rotation || 0}deg`,
            ...style,
            width,
            height,
          }}
        >
          {children}
        </div>
        {menuOpen && (
          <Menu>
            <MenuItem
              onClick={() => {
                const rotation = devices[id]?.rotation || 0;
                dispatch(
                  updateDeviceRotation({
                    id,
                    rotation: getNextRotation(rotation),
                  })
                );
              }}
            >
              <RotateCw className="w-[29px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px]" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                const rotation = devices[id]?.rotation || 0;
                dispatch(
                  updateDeviceRotation({
                    id,
                    rotation: getPreviousRotation(rotation),
                  })
                );
              }}
            >
              <RotateCcw className="w-[29px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px]" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  addDevice({
                    type: devices[id]?.type,
                    width,
                    height,
                    rotation: devices[id]?.rotation,
                    x: devices[id]?.x + 10,
                    y: devices[id]?.y + 10,
                  })
                );
              }}
            >
              <Copy className="w-[29px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px] "></Copy>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(removeDevice(id));
              }}
            >
              <Trash2 className="w-[31px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px] "></Trash2>
            </MenuItem>
          </Menu>
        )}
      </div>
    </Draggable>
  );
};

export const MeetingOwl3 = ({ id, dragHandlers }) => {
  const { width, height } = DEVICE_DIMENSIONS[DEVICE_TYPES.MEETING_OWL_3];
  const { videoRangesEnabled, audioRangesEnabled } = useSelector(
    (state) => state.room
  );
  return (
    <Device id={id} dragHandlers={dragHandlers} width={width} height={height}>
      <img
        draggable="false"
        id={id}
        src="assets/img/mop3.png"
        alt="Meeting Owl 3"
      />
      {videoRangesEnabled && (
        <>
          <span
            className={`absolute inline-flex rounded-full bg-blue-200 opacity-75 
        w-[500px] h-[500px] -z-10
      `}
          ></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 -z-20"></span>
        </>
      )}
      {audioRangesEnabled && (
        <>
          <span
            className={`absolute inline-flex rounded-full bg-red-200 opacity-50 
      w-[900px] h-[900px] -z-20
    `}
          ></span>
        </>
      )}
    </Device>
  );
};

export const WhiteboardOwl = ({ id, dragHandlers }) => {
  const { width, height } = DEVICE_DIMENSIONS[DEVICE_TYPES.WHITEBOARD_OWL];
  const { videoRangesEnabled, audioRangesEnabled } = useSelector(
    (state) => state.room
  );
  return (
    <Device id={id} dragHandlers={dragHandlers} width={width} height={height}>
      <img draggable="false" src="assets/img/wbo.png" alt="Whiteboard Owl" />
      {videoRangesEnabled && (
        <>
          <span
            className={`animate top-[50px] absolute inline-flex bg-none border-blue-200 opacity-50 
            w-0 h-0 
            border-l-[110px] border-l-transparent
            border-b-[350px] 
            border-r-[110px] border-r-transparent -z-10
      `}
          ></span>
          <span
            className={`top-[50px] absolute inline-flex bg-none border-green-200 opacity-75 
            w-0 h-0 
            border-l-[235px] border-l-transparent
            border-b-[750px] 
            border-r-[235px] border-r-transparent -z-20
      `}
          ></span>
        </>
      )}
    </Device>
  );
};

export const MeetingHQ = ({ id, dragHandlers }) => {
  const { width, height } = DEVICE_DIMENSIONS[DEVICE_TYPES.MEETING_HQ];
  return (
    <Device id={id} dragHandlers={dragHandlers} width={width} height={height}>
      <img draggable="false" src="assets/img/mhq.png" alt="Meeting HQ" />
    </Device>
  );
};

export const ExpansionMic = ({ id, dragHandlers }) => {
  const { width, height } = DEVICE_DIMENSIONS[DEVICE_TYPES.EXPANSION_MIC];
  const { videoRangesEnabled, audioRangesEnabled } = useSelector(
    (state) => state.room
  );
  return (
    <Device id={id} dragHandlers={dragHandlers} width={width} height={height}>
      <img
        draggable="false"
        src="assets/img/expansion-mic.png"
        alt="Expansion Mic"
      />
      {audioRangesEnabled && (
        <>
          <span
            className={`absolute inline-flex rounded-full bg-red-200 opacity-50 
        w-[300px] h-[300px] -z-20
      `}
          ></span>
        </>
      )}
    </Device>
  );
};

export default Device;
