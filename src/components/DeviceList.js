import React from "react";
import { useDispatch } from "react-redux";
import { addDevice } from "../slices/room";
import { DEVICE_DIMENSIONS, DEVICE_TYPES } from "../constants/Room";

const DeviceImage = ({ size, src, name, type, className }) => {
  const dispatch = useDispatch();
  const { width, height } = DEVICE_DIMENSIONS[type];
  const onClick = () => {
    dispatch(addDevice({ type, width, height }));
  };
  return (
    <img
      width={size}
      height={size}
      src={src}
      alt={name}
      title={name}
      className={className}
      draggable="false"
      onClick={onClick}
    />
  );
};

const DeviceList = () => {
  const size = 50;
  return (
    <>
      <div className="mx-8 flex flex-col items-center bg-white h-full px-8 rounded pt-8 shadow-lg">
        <h3 className="font-sans_semibold text-xl">Devices</h3>
        <DeviceImage
          size={size}
          src="assets/img/mop3.png"
          type={DEVICE_TYPES.MEETING_OWL_3}
          name="Meeting Owl 3"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <DeviceImage
          size={size}
          src="assets/img/wbo.png"
          type={DEVICE_TYPES.WHITEBOARD_OWL}
          name="Whiteboard Owl"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <DeviceImage
          size={size}
          src="assets/img/mhq.png"
          type={DEVICE_TYPES.MEETING_HQ}
          name="Meeting HQ"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <DeviceImage
          size={size}
          src="assets/img/expansion-mic.png"
          type={DEVICE_TYPES.EXPANSION_MIC}
          name="Expansion Mic"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
      </div>
    </>
  );
};

export default DeviceList;
