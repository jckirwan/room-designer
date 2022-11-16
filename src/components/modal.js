import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

/*
  The Modal component is vertically and horizontally centered box that sits on a mildly opaque backdrop. To trigger a modal, you will need to include the following in the parent component that calls it
  
    const [openModal, setOpenModal] = useState(false);

  You will also need a button/cta that triggers the modal, eg: 
    <OwlButton type="btn-tertiary" onClick={() => setOpenModal(true)}>
      Click this Button
    </OwlButton>

  The Modal component will take any children you pass into it, but it features three pre-built components, ModalTitle, ModalBody and ModalFooter.

  @openModal - toggle state for show/hide modal (see above)
  @setOpenModal - function for show/hide modal
  @widthClass - OPTIONAL - default width for modal is the Tailwind class w-fit, which will size the modal to essential display its contents. If your design requires a more custom width property, simply pass in a different Tailwind class using the widthClass parameter, eg: widthClass="w-96". 
*/

const BasicModal = ({
  openModal,
  setOpenModal,
  widthClass,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");

  const continueToSimulator = () =>{
    setOpen(false)
    console.log("continue to simulator")
    console.log(roomWidth, roomHeight)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to the Owl Labs Rooms Simulator! 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Enter the width and height of your Owl's home:
          </Typography>
          <div className="inline-flex">
            <div>
             Width:<input className="w-12" placeholder="ft" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)}></input>
            </div>{" "}
            X
            <div className="ml-4">
              Height:<input className="w-12" placeholder="ft" value={roomHeight} onChange={(e) =>setRoomHeight(e.target.value)}></input>
            </div>
          </div>
          <div>
            <Button onClick={()=>continueToSimulator()}>Continue</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default BasicModal;
