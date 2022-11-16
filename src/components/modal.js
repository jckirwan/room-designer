import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const BasicModal = ({
    roomHeight,
    setRoomHeight,
    roomWidth,
    setRoomWidth,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
//   const continueToSimulator = () =>{
//     setOpen(false)
//     console.log("continue to simulator")
//     console.log(roomWidth, roomHeight)
//   }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <div className="inline-flex mt-3">
            <div>
             Width:<input className="w-12" placeholder="ft" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)}></input>
            </div>{" "}
            X
            <div className="ml-4">
              Height:<input className="w-12" placeholder="ft" value={roomHeight} onChange={(e) =>setRoomHeight(e.target.value)}></input>
            </div>
          </div>
          <div>
            <Button onClick={()=>setOpen(false)}>Continue</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default BasicModal;
