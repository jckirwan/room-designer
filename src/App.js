import React, { useState } from "react";
import Room from "./components/Room";
import Device from "./components/Device";
import { Chair, Table, TV } from "./components/Furniture";
import MenuIcon from "./components/MenuIcon";

const DEFAULT_DELTAS = {
  x: 0,
  y: 0,
};

const DEFAULT_CONTROLLED = {
  x: -400,
  y: 200,
};

const App = () => {
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState(DEFAULT_DELTAS);
  const [controlledPosition, setControlledPosition] =
    useState(DEFAULT_CONTROLLED);
  const [isDragging, setIsDragging] = useState(activeDrags > 0);

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    console.log(ui);
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const onStart = () => {
    console.log("Starting...");
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    console.log("Stopped!");
    setActiveDrags(activeDrags - 1);
  };

  const onDrop = (e) => {
    console.log("Dropped!");
    setActiveDrags(activeDrags - 1);
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!", e.target);
      // e.target.classList.remove('hovered');
    }
  };

  const onDropAreaMouseEnter = (e) => {
    if (isDragging) {
      console.log("Entered drop area while dragging!");
      // e.target.classList.add('hovered');
    }
  };

  const onDropAreaMouseLeave = (e) => {
    if (isDragging) {
      console.log("Exited drop area while dragging!");
      // e.target.classList.remove('hovered');
    }
  };

  // For controlled component
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = controlledPosition;
    setControlledPosition({ x: x - 10, y });
  };

  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = controlledPosition;
    setControlledPosition({ x, y: y - 10 });
  };

  const onControlledDrag = (e, position) => {
    setControlledPosition(position);
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  const dragHandlers = {
    onStart,
    onStop,
    onDrop,
    handleDrag,
    onDropAreaMouseEnter,
    onDropAreaMouseLeave,
  };

  // This should be a map so we can insert, remove, update, etc
  const [roomFurniture, setRoomFurniture] = useState([
    <Table dragHandlers={dragHandlers} />,
    <Chair dragHandlers={dragHandlers} />,
    <TV dragHandlers={dragHandlers} canHoldDevices={false} />,
  ]);

  // This should be a map so we can insert, remove, update, etc
  const [roomDevices, setRoomDevices] = useState([
    <Device activeDrags={activeDrags} dragHandlers={dragHandlers} />,
  ]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 mb-8">
          <MenuIcon />
        </div>
      
      
        <Room>
          {roomFurniture}
          {roomDevices}
        </Room>
        </div>
    </>
  );
};

export default App;
