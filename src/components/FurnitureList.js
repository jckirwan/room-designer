import React from "react";
import { useDispatch } from "react-redux";
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
  return (
    <>
      <div className="mx-8  bg-white h-full px-8 rounded pt-8 shadow-lg">
        <h3 className="font-sans_semibold text-xl pb-2 text-center">Furniture</h3>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center mr-6">
            <span className="font-sans text-sm">Large Table</span>
            <FurnitureImage
              size={100}
              src="assets/img/conference-large.png"
              type={FURNITURE_TYPES.TABLE_LARGE}
              name="Table large"
              className="rotate my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <span className="font-sans text-sm">Medium Table</span>
            <FurnitureImage
              size={75}
              src="assets/img/conference-medium.png"
              type={FURNITURE_TYPES.TABLE_MEDIUM}
              name="Table medium"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <span className="font-sans text-sm">Small Table</span>
            <FurnitureImage
              size={50}
              src="assets/img/conference-small.png"
              type={FURNITURE_TYPES.TABLE_SMALL}
              name="Table small"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <span className="font-sans text-sm">Chair</span>
            <FurnitureImage
              size={50}
              src="assets/img/chair.svg"
              type={FURNITURE_TYPES.CHAIR}
              name="Chair"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-sans text-sm">TV</span>
            <FurnitureImage
              size={50}
              src="assets/img/tv.png"
              type={FURNITURE_TYPES.SCREEN}
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            /> 
            <span className="font-sans text-sm">Podium</span>
            <FurnitureImage
              size={50}
              src="assets/img/podium-top.png"
              type={FURNITURE_TYPES.PODIUM}
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <span className="font-sans text-sm">Whiteboard</span>
            <FurnitureImage
              size={50}
              src="assets/img/minus.png"
              type={FURNITURE_TYPES.WHITEBOARD}
              name="Whiteboard"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <span className="font-sans text-sm">Pool Table</span>
            <FurnitureImage
              size={50}
              src="assets/img/pool-table.png"
              type={FURNITURE_TYPES.WHITEBOARD}
              name="Sofa"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureList;
