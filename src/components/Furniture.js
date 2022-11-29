import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import {
  GRID_DIMENSIONS_PIXEL,
  FURNITURE_DIMENSIONS,
  FURNITURE_TYPES,
} from "../constants/Room";
import {
  updateFurnitureRotation,
  removeFurniture,
  addFurniture,
} from "../slices/room";
import { RotateCw, RotateCcw, Copy, Trash2 } from "react-feather";
import { Menu, MenuItem } from "../components/Menu";
import { getNextRotation, getPreviousRotation } from "../utils";

const Furniture = ({
  dragHandlers,
  width,
  height,
  style = {},
  children,
  id,
  ...props
}) => {
  const dispatch = useDispatch();
  const { furniture } = useSelector((state) => state.room);
  const [menuOpen, setMenuOpen] = useState(false);
  const position = {
    x: furniture[id]?.x,
    y: furniture[id]?.y,
  };
  return (
    <Draggable
      // bounds="parent"
      grid={GRID_DIMENSIONS_PIXEL}
      onDrag={dragHandlers.onDrag}
      {...dragHandlers}
      cancel=".menu"
      position={position}
    >
      <div
        id={id}
        className={`furniture`}
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
            background: style?.background || "none",
            border: style?.background || "1px solid transparent",
            borderRadius: style?.borderRadius || 50,
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            rotate: `${furniture[id]?.rotation || 0}deg`,
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
                const rotation = furniture[id]?.rotation || 0;
                dispatch(
                  updateFurnitureRotation({
                    id,
                    rotation: getNextRotation(rotation),
                  })
                );
              }}
            >
              <RotateCw className="w-[30px] font-sans h-[23px] text-black inline cursor:pointer mt-[-5px]" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                const rotation = furniture[id]?.rotation || 0;
                dispatch(
                  updateFurnitureRotation({
                    id,
                    rotation: getPreviousRotation(rotation),
                  })
                );
              }}
            >
              <RotateCcw className="w-[30px] font-sans h-[23px] text-black inline cursor:pointer mt-[-5px]" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(
                  addFurniture({
                    type: furniture[id]?.type,
                    width,
                    height,
                    rotation: furniture[id]?.rotation,
                    x: furniture[id]?.x + 10,
                    y: furniture[id]?.y + 10,
                  })
                );
              }}
            >
              <Copy className="w-[29px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px] "></Copy>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(removeFurniture(id));
              }}
            >
              <Trash2 className="w-[29.5px] font-sans h-[21px] text-black inline cursor:pointer mt-[-5px] "></Trash2>
            </MenuItem>
          </Menu>
        )}
      </div>
    </Draggable>
  );
};

export const TableSmall = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.TABLE_SMALL];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture
      style={{
        border: "none",
        background: "none",
        width,
        height,
        padding: 0,
      }}
      width={width}
      height={height}
      {...props}
    >
      <img
        draggable="false"
        src={`${lightMode ? "assets/img/conference-small.png" : "assets/img/conference-small-white.png" }`}
        alt="Table"
      />
    </Furniture>
  );
};

export const TableMedium = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.TABLE_MEDIUM];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture
      style={{
        border: "none",
        background: "none",
        width,
        height,
        padding: 0,
      }}
      width={width}
      height={height}
      {...props}
    >
      <img
        width={width}
        height={height}
        draggable="false"
        src={`${lightMode ? "assets/img/conference-medium.png" : "assets/img/conference-medium-white.png"}`}
        alt="Table"
      />
    </Furniture>
  );
};

export const TableLarge = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.TABLE_LARGE];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture
      style={{
        border: "none",
        background: "none",
        width,
        height,
        padding: 0,
      }}
      width={width}
      height={height}
      {...props}
    >
      <img
        width={width}
        height={height}
        draggable="false"
        src={`${lightMode ? "assets/img/conference-large.png" : "assets/img/conference-large-white.png"}`}
        alt="Table"
      />
    </Furniture>
  );
};

export const Chair = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.CHAIR];
  const { lightMode } = useSelector((state) => state.room);
  const style = {
    borderRadius: 0,
    color: "white",
    width,
    height,
    background: "transparent",
    border: "none",
  };

  return (
    <Furniture style={style} width={width} height={width} {...props}>
      <img
        width={width}
        height={width}
        src={`${lightMode ? "assets/img/chair.svg" : "assets/img/chair-white.png" }`}
        draggable={false}
      />
    </Furniture>
  );
};

export const TV = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.SCREEN];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture width={width} height={height} {...props}>
      <img
        width={width}
        height={width}
        src={`${lightMode ? "assets/img/tv-component.png" : "assets/img/tv-component-white.png" }`}
        draggable={false}
      />
    </Furniture>
  );
};

export const Whiteboard = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.WHITEBOARD];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture width={width} height={height} {...props}>
      <img
        width={width}
        height={width}
        src={`${lightMode ? "assets/img/whiteboard-component.png" : "assets/img/whiteboard-component-white.png" }`}
        draggable={false}
      />
    </Furniture>
  );
};

export const Podium = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.PODIUM];
  const { lightMode } = useSelector((state) => state.room);
  return (
    <Furniture width={width} height={height} {...props}>
      <img
        width={width}
        height={width}
        src={`${lightMode ? "assets/img/podium-top.png" : "assets/img/podium-top-white.png" }`}
        draggable={false}
      />
    </Furniture>
  );
};

export const PoolTable = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.POOL_TABLE];
  return (
    <Furniture width={width} height={height} {...props}>
      <img
        width={width}
        height={width}
        src="assets/img/pool-table.png"
        draggable={false}
      />
    </Furniture>
  );
};

export default Furniture;
