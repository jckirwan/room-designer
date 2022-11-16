import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Room from "./components/Room";
import Device from "./components/Device";
import DeviceList from "./components/DeviceList";
import FurnitureList from "./components/FurnitureList";
import { Chair, Table, TV } from "./components/Furniture";
import MenuIcon from "./components/MenuIcon";
import BasicModal from "./components/modal";
import ConfirmationModal from "./components/ConfirmationModal";
import { MeetingOwl3, WhiteboardOwl, MeetingHQ } from "./components/Device";

import {
  resetRoom,
  updateDeviceCoordinates,
  updateFurnitureCoordinates,
} from "./slices/room";

const DEFAULT_DELTAS = {
  x: 0,
  y: 0,
};

const DEFAULT_CONTROLLED = {
  x: -400,
  y: 200,
};

const App = () => {
  const dispatch = useDispatch();
  const { devices, furniture } = useSelector((state) => state.room);
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState(DEFAULT_DELTAS);
  const [controlledPosition, setControlledPosition] =
    useState(DEFAULT_CONTROLLED);
  const [isDragging, setIsDragging] = useState(activeDrags > 0);
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");

  const onDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const onStart = (e, ui) => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = (e, ui) => {
    const { x, y } = ui;
    const { id, classList } = ui?.node;
    const isDevice = classList.contains("device");
    if (isDevice) {
      dispatch(
        updateDeviceCoordinates({
          id,
          x,
          y,
        })
      );
    } else {
      dispatch(
        updateFurnitureCoordinates({
          id,
          x,
          y,
        })
      );
    }
    setActiveDrags(activeDrags - 1);
  };

  const onDrop = (e) => {
    setActiveDrags(activeDrags - 1);
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!", e.target);
    }
  };

  const onDropAreaMouseEnter = (e) => {
    if (isDragging) {
      console.log("Entered drop area while dragging!");
    }
  };

  const onDropAreaMouseLeave = (e) => {
    if (isDragging) {
      console.log("Exited drop area while dragging!");
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
    onDrag,
    onDropAreaMouseEnter,
    onDropAreaMouseLeave,
  };

  const createFurniture = (furniture) => {
    return Object.entries(furniture).map(([id, piece]) => {
      let component;
      const { type } = piece;
      switch (type) {
        case "chair":
          component = <Chair key={id} id={id} dragHandlers={dragHandlers} />;
          break;
        case "tv":
          component = <TV key={id} id={id} dragHandlers={dragHandlers} />;
          break;
        case "table":
          component = <Table key={id} id={id} dragHandlers={dragHandlers} />;
          break;
        default:
          break;
      }
      return component;
    });
  };

  const createDevices = (devices) => {
    return Object.entries(devices).map(([id, piece]) => {
      let component;
      const { type } = piece;
      switch (type) {
        case "mop3":
          component = (
            <MeetingOwl3
              key={id}
              id={id}
              activeDrags={activeDrags}
              dragHandlers={dragHandlers}
            />
          );
          break;
        case "wbo":
          component = (
            <WhiteboardOwl
              key={id}
              id={id}
              activeDrags={activeDrags}
              dragHandlers={dragHandlers}
            />
          );
          break;
        case "mhq":
          component = (
            <MeetingHQ
              key={id}
              id={id}
              activeDrags={activeDrags}
              dragHandlers={dragHandlers}
            />
          );
          break;
        default:
          break;
      }
      return component;
    });
  };

  const [roomFurniture, setRoomFurniture] = useState(
    createFurniture(furniture)
  );

  const [roomDevices, setRoomDevices] = useState(createDevices(devices));

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
            <BasicModal
              roomWidth={roomWidth}
              roomHeight={roomHeight}
              setRoomWidth={setRoomWidth}
              setRoomHeight={setRoomHeight}
            ></BasicModal>
            <ConfirmationModal></ConfirmationModal>
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
