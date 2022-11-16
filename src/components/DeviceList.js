import React from "react";

const DeviceImage = ({ size, src, name, className }) => {
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

const DeviceList = () => {
  const size = 50;
  return (
    <>
      <div className="mx-8 flex flex-col items-center bg-white h-full px-8 rounded pt-8 shadow-lg">
      <h3 className="font-sans_semibold text-xl">Devices</h3>
        <DeviceImage
          size={size}
          src="assets/img/mop3.png"
          name="Meeting Owl 3"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <DeviceImage
          size={size}
          src="assets/img/wbo.png"
          name="Whiteboard Owl"
          className="my-4 hover:cursor-grab active:cursor-grabbing"
        />
        <DeviceImage size={size} src="assets/img/mhq.png" name="Meeting HQ" className="my-4 hover:cursor-grab active:cursor-grabbing"/>
      </div>
    </>
  );
};

export default DeviceList;
