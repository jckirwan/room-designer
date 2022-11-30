import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFurniture } from "../slices/room";
import { FURNITURE_DIMENSIONS, FURNITURE_TYPES } from "../constants/Room";

const FurnitureImage = ({ size, src, type, name, className }) => {
  const dispatch = useDispatch();
  
  const { width, height } = FURNITURE_DIMENSIONS[type];
  const onClick = () => {
    dispatch(addFurniture({ type, width, height }));
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

const FurnitureList = () => {
  const { lightMode } = useSelector((state) => state.room);
  return (
    <>
      <div className="mx-8  bg-white h-full px-8 rounded pt-8 shadow-lg dark:bg-gray-900 dark:text-white dark:shadow-none">
        <h3 className="font-sans_semibold text-xl pb-2 text-center">
          Furniture
        </h3>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center mr-6">
            <span className="font-sans text-sm">Large Table</span>
            <FurnitureImage
              size={100}
              src={`${lightMode ? "assets/img/conference-large.png" : "assets/img/conference-large-white.png"}`}
              type={FURNITURE_TYPES.TABLE_LARGE}
              name="Table large"
              className="rotate my-4 hover:cursor-crosshair active:cursor-crosshair "
            />
            <span className="font-sans text-sm">Medium Table</span>
            <FurnitureImage
              size={75}
              src={`${lightMode ? "assets/img/conference-medium.png" : "assets/img/conference-medium-white.png"}`}
              type={FURNITURE_TYPES.TABLE_MEDIUM}
              name="Table medium"
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
            <span className="font-sans text-sm">Small Table</span>
            <FurnitureImage
              size={50}
              src={`${lightMode ? "assets/img/conference-small.png" : "assets/img/conference-small-white.png" }`}
              type={FURNITURE_TYPES.TABLE_SMALL}
              name="Table small"
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
            <span className="font-sans text-sm">Chair</span>
            <FurnitureImage
              size={50}
              src={`${lightMode ? "assets/img/chair.svg" : "assets/img/chair-white.png" }`}
              type={FURNITURE_TYPES.CHAIR}
              name="Chair"
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-sans text-sm">TV</span>
            <FurnitureImage
              size={50}
              src={`${lightMode ? "assets/img/tv.png" : "assets/img/tv-white.png" }`}
              type={FURNITURE_TYPES.SCREEN}
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
            <span className="font-sans text-sm">Podium</span>
            <FurnitureImage
              size={50}
              src={`${lightMode ? "assets/img/podium-top.png" : "assets/img/podium-top-white.png" }`}
              type={FURNITURE_TYPES.PODIUM}
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
            <span className="font-sans text-sm">Whiteboard</span>
            <FurnitureImage
              size={50}
              src={`${lightMode ? "assets/img/whiteboard-menu.png" : "assets/img/whiteboard-menu-white.png" }`}
              type={FURNITURE_TYPES.WHITEBOARD}
              name="Whiteboard"
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
            <span className="font-sans text-sm">Pool Table</span>
            <FurnitureImage
              size={50}
              src="assets/img/pool-table.png"
              type={FURNITURE_TYPES.POOL_TABLE}
              name="Pool Table"
              className="my-4 hover:cursor-crosshair active:cursor-crosshair"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureList;
