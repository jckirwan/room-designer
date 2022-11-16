import React from "react";

const DeviceImage = ({ size, src, name }) => {
  return <img width={size} height={size} src={src} alt={name} />;
};

const DeviceList = () => {
  const size = 50;
  return (
    <div className="">
      <h2>Devices</h2>
      <div>
        <DeviceImage
          size={size}
          src="assets/img/mop3.png"
          name="Meeting Owl 3"
        />
        <DeviceImage
          size={size}
          src="assets/img/wbo.png"
          name="Whiteboard Owl"
        />
        <DeviceImage size={size} src="assets/img/mhq.png" name="Meeting HQ" />
      </div>
    </div>
  );
};

export default DeviceList;
