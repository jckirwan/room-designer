import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const BasicModal = ({
  roomLength,
  setRoomLength,
  roomWidth,
  setRoomWidth,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="button">
        Change Room Dimensions
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute w-[480px] h-[215px] border border-solid border-gray-300 top-[38%] right-[36%] bg-white origin-[-50%_-50%]">
          <div
            id="modal-modal-description"
            className="mt-2 font-sans text-xl w-full p-2 "
          >
            Enter office width and length:
          </div>
          <div className="flex p-6 mt-3 h-20 border-y border-gray-400 border-solid w-full">
            <div>
              Width:
              <input
                className="w-12 ml-2 border border-gray-400 px-2 "
                placeholder="ft"
                value={roomWidth}
                onChange={(e) => setRoomWidth(e.target.value)}
              ></input>
            </div>{" "}
            <div className="ml-4">x</div>
            <div className="ml-4">
              Length:
              <input
                className="w-12 border border-gray-400 ml-2 px-2"
                placeholder="ft"
                value={roomLength}
                onChange={(e) => setRoomLength(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-center w-full p-2">
            <button
              onClick={() => {
                setOpen(false);
                setRoomLength("");
                setRoomWidth("");
              }}
              className="button-secondary"
            >
              Cancel
            </button>
            <button onClick={() => setOpen(false)} className="button ">
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default BasicModal;
