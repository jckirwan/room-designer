import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import { GRID_DIMENSIONS_PIXEL } from "../constants/Room";
import { updateFurnitureRotation } from "../slices/room";
import { RotateCw } from "react-feather";


const getNextRotation = (rotation) => {
  console.log("rotation!", rotation);
  if (rotation === 315) {
    return 0;
  }
  return rotation + 45;
};

const MenuItem = ({ onClick, last, children }) => {
  return (
    <div
      // style={{ padding: 5, borderBottom: last ? "none" : "1px solid grey" }}
      style={{ padding: 5}}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Menu = ({ children }) => {
  return (
    <div className="absolute w-[38px] -bottom-[29px] z-10 select-none ">
      {children}
    </div>
  );
};

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
              <RotateCw className="w-[23px] font-sans h-[23px] text-black inline cursor:pointer mt-[-5px] ml-[2px]" />
            </MenuItem>
          </Menu>
        )}
      </div>
    </Draggable>
  );
};

export const Table = ({ width = 200, height = 100, children, ...props }) => {
  return (
    <Furniture
      style={{
        borderRadius: 50,
        background: "brown",
        color: "white",
        width: 175,
        height: 175,
      }}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </Furniture>
  );
};

export const Chair = ({ width = 50, children, ...props }) => {
  const style = {
    borderRadius: 0,
    color: "white",
    width: width,
    height: width,
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
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(25);
  return (
    <Furniture
      style={{
        borderRadius: 0,
        background: "grey",
        color: "white",
      }}
      width={width}
      height={height}
      setWidth={setWidth}
      setHeight={setHeight}
      {...props}
    >
      {children}
    </Furniture>
  );
};

export default Furniture;
