import React, { useState } from "react";
import Room from "./components/Room";
import Device from "./components/Device";
import DeviceList from "./components/DeviceList";
import FurnitureList from "./components/FurnitureList";
import { Chair, Table, TV } from "./components/Furniture";
import MenuIcon from "./components/MenuIcon";
import BasicModal from './components/Modal';


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
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");

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
        <div className="flex flex-col items-center w-full">
          <div className="w-full bg-blue-500 shadow-sm">
          <div className="my-4">
            <MenuIcon />
          </div>
          </div>
          <div className="my-4 inline-block">
            <BasicModal roomWidth={roomWidth} roomHeight={roomHeight} setRoomWidth={setRoomWidth} setRoomHeight={setRoomHeight}></BasicModal>
            <button
              className="button-secondary"
              onClick={() => console.log("Reset room button was clicked.")}
            >
              Reset Room
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex flex-col">
            <DeviceList />
          </div>
          <div className="">
            <Room height={roomHeight} width={roomWidth}>
              {roomFurniture}
              {roomDevices}
            </Room>
          </div>
          <div className="flex flex-col">
            <FurnitureList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
