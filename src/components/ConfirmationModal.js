import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { resetRoom } from "../slices/room";

const ConfirmationModal = ({
  ...props
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const clearRoom = () => {
    setOpen(false)
    dispatch(resetRoom())
  }

  return (
    <>
      <button onClick={handleOpen} className="button-danger">Reset Room</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute w-[480px] h-[215px] border border-solid border-gray-300 top-[38%] right-[36%] bg-white origin-[-50%_-50%]">
          <div id="modal-modal-description" className="mt-2 font-sans text-xl w-full p-2 ">
            Reset Room
          </div>
          <div className="flex p-6 mt-3 h-20 border-y border-gray-400 border-solid w-full">
            Are you sure you want to reset the current room?
          </div>

          <div className='flex items-center justify-center w-full p-2'>
          <button onClick={()=>setOpen(false)} className="button-secondary">Cancel</button>
            <button onClick={()=>clearRoom()} className="button ">Continue</button>
          </div>
          </div>
      </Modal>
    </>
  );
};
export default ConfirmationModal;
