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
import { RotateCw, RotateCcw , Copy, Trash2} from "react-feather";
import { Menu, MenuItem } from "../components/Menu";
import { getNextRotation, getPreviousRotation } from "../utils";

const Furniture = ({
  dragHandlers,
  width,
  height,
  style,
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
      bounds="parent"
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
            background: style.background || "#eee",
            border: "1px solid #999",
            borderRadius: style.borderRadius || 50,
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
        src="assets/img/conference-small.png"
        alt="Table"
      />
    </Furniture>
  );
};

export const TableMedium = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.TABLE_MEDIUM];
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
        src="assets/img/conference-medium.png"
        alt="Table"
      />
    </Furniture>
  );
};

export const TableLarge = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.TABLE_LARGE];
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
        src="assets/img/conference-large.png"
        alt="Table"
      />
    </Furniture>
  );
};

export const Chair = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.CHAIR];
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
        src="assets/img/chair.svg"
        draggable={false}
      />
    </Furniture>
  );
};

export const TV = ({ children, ...props }) => {
  const { width, height } = FURNITURE_DIMENSIONS[FURNITURE_TYPES.SCREEN];
  return (
    <Furniture
      style={{
        borderRadius: 0,
        background: "grey",
        color: "white",
      }}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </Furniture>
  );
};



export default Furniture;
