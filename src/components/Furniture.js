import React, { useState } from "react";
import Draggable from "react-draggable";
import { GRID_SIZE } from "../constants/Room";

const getNextRotation = (rotation) => {
  console.log("rotation!", rotation);
  if (rotation === 270) {
    return 0;
  }
  return rotation + 45;
};

const MenuItem = ({ onClick, last, children }) => {
  return (
    <div
      style={{ padding: 5, borderBottom: last ? "none" : "1px solid grey" }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Menu = ({ children }) => {
  const WIDTH = 75;
  return (
    <div
      style={{
        border: "1px solid black",
        position: "absolute",
        right: -WIDTH,
        background: "#fff",
        color: "#000",
        width: WIDTH,
        userSelect: "none",
        zIndex: 1000,
      }}
      className="menu"
    >
      {children}
    </div>
  );
};

const Furniture = ({
  dragHandlers,
  width,
  height,
  setWidth,
  setHeight,
  style,
  children,
  canHoldDevices = true,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  return (
    <Draggable
      bounds="parent"
      grid={GRID_SIZE}
      {...dragHandlers}
      cancel=".menu"
    >
      <div
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
        handleDrag={dragHandlers.handleDrag}
      >
        <div
          className={canHoldDevices ? "drop-target" : ""}
          style={{
            background: style.background || "#eee",
            border: "1px solid #999",
            borderRadius: style.borderRadius || 50,
            margin: 0,
            zIndex: 1,
            rotate: `${rotation}deg`,
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
                setRotation(getNextRotation(rotation));
              }}
            >
              Rotate
            </MenuItem>
            {setHeight && (
              <MenuItem
                onClick={() => {
                  setHeight(height + 25);
                }}
              >
                Y +
              </MenuItem>
            )}
            {setHeight && (
              <MenuItem
                onClick={() => {
                  setHeight(height - 25);
                }}
              >
                Y -
              </MenuItem>
            )}
            {setWidth && (
              <MenuItem
                onClick={() => {
                  setWidth(width + 25);
                }}
              >
                X +
              </MenuItem>
            )}
            {setWidth && (
              <MenuItem
                onClick={() => {
                  setWidth(width - 25);
                }}
                last={true}
              >
                X -
              </MenuItem>
            )}
          </Menu>
        )}
      </div>
    </Draggable>
  );
};

export const Table = ({ children, ...props }) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
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
      setWidth={setWidth}
      setHeight={setHeight}
      {...props}
    >
      {children}
    </Furniture>
  );
};

export const Chair = ({ children, ...props }) => {
  const [width, setWidth] = useState(50);

  const style = {
    borderRadius: 0,
    color: "white",
    width: width,
    height: width,
    background: "transparent",
    border: "none",
  };

  return (
    <Furniture
      style={style}
      width={width}
      height={width}
      setWidth={setWidth}
      {...props}
    >
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
