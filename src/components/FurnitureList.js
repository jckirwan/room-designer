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
        className={className}
      />
    );
  };
  return (
    <>
      <div className="mx-8 flex flex-col items-center bg-white h-full px-8 rounded pt-8 shadow-lg">
        <h3 className="font-sans_semibold text-xl">Furniture</h3>
        <FurnitureImage
          size={75}
          src="assets/img/conference.svg"
          name="Table"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <FurnitureImage
          size={50}
          src="assets/img/chair.svg"
          name="Chair"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />

      </div>
    </>
  );
};

export default FurnitureList;
