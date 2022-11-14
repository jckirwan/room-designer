import React from 'react';

const Room = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        /* Account for borders on width/height */
        width: 1002,
        height: 602,
        backgroundImage:
          'repeating-linear-gradient(#eee 0 1px,transparent 1px 100%),repeating-linear-gradient(90deg, #eee 0 1px, transparent 1px 100%)',
        backgroundSize: '25px 25px',
        backgroundColor: '#fff',
        border: '1px solid grey',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Room;
