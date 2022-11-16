import React from "react";

const FurnitureImage = ({ size, src, name }) => {
  return <img width={size} height={size} src={src} alt={name} />;
};

const FurnitureList = () => {
  const FurnitureImage = ({ size, src, name, className }) => {
    return (
      <img
        width={size}
        height={size}
        src={src}
        alt={name}
        title={name}
        className={className}
      />
    );
  };
  return (
    <>
      <div className="mx-8  bg-white h-full px-8 rounded pt-8 shadow-lg">
        <h3 className="font-sans_semibold text-xl text-center">Furniture</h3>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center mr-6">
            <FurnitureImage
              size={100}
              src="assets/img/conference.svg"
              name="Table large"
              className="rotate my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <FurnitureImage
              size={75}
              src="assets/img/conference.svg"
              name="Table medium"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <FurnitureImage
              size={50}
              src="assets/img/conference.svg"
              name="Table small"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <FurnitureImage
              size={25}
              src="assets/img/chair.svg"
              name="Chair"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
          </div>
          <div className="flex flex-col items-center">
            <FurnitureImage
              size={50}
              src="assets/img/tv.svg"
              name="Screen"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <FurnitureImage
              size={50}
              src="assets/img/podium.svg"
              name="Podium"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
            <FurnitureImage
              size={50}
              src="assets/img/free-whiteboard-icon.png"
              name="Whiteboard"
              className="my-4 hover:cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureList;
