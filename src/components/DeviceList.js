import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { lightMode } = useSelector((state) => state.room);
  return (
    <>
      <div className="mx-8 flex flex-col items-center bg-white dark:bg-gray-900 dark:text-white h-full px-8 rounded pt-8 shadow-lg dark:shadow-none">
        <h3 className="font-sans_semibold text-xl pb-2">Devices</h3>
        
        <div className="font-sans text-sm pb-7">Meeting Owl 3
        <DeviceImage
          size={size}
          src="assets/img/mop3.png"
          type={DEVICE_TYPES.MEETING_OWL_3}
          name="Meeting Owl 3"
          className="mt-2 ml-6 hover:cursor-crosshair active:cursor-crosshair"
        />
        </div>
        <div className="font-sans text-sm pb-7">Whiteboard Owl
        <DeviceImage
          size={size}
          src="assets/img/wbo.png"
          type={DEVICE_TYPES.WHITEBOARD_OWL}
          name="Whiteboard Owl"
          className="mt-2 ml-6 hover:cursor-crosshair active:cursor-crosshair"
        />
        </div>
        <div className="font-sans text-sm pb-7 ml-[5px]">
          <span className="ml-[5px]">MHQ</span>
        <DeviceImage
          size={size}
          src="assets/img/mhq.png"
          type={DEVICE_TYPES.MEETING_HQ}
          name="Meeting HQ"
          className="mt-2 hover:cursor-crosshair active:cursor-crosshair"
        />
        </div>
        <div className="font-sans text-sm pb-7">Expansion Mic
        <DeviceImage
          size={size}
          src={`${lightMode ? "assets/img/expansion-mic.png" : "assets/img/expansion-mic-light.png"}`}
          type={DEVICE_TYPES.EXPANSION_MIC}
          name="Expansion Mic"
          className="mt-2 ml-6 hover:cursor-crosshair active:cursor-crosshair"
        />
        </div>
      </div>
    </>
  );
};

export default DeviceList;
