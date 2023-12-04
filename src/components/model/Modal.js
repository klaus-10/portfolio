import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Modal.css";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ img, title, desc, state, openFunction }) {
  // Remove the local 'open' state from here
  const handleClose = () => {
    openFunction(); // Call the function passed from the parent to close the modal
  };

  return (
    <div>
      <Modal
        open={state} // Use the 'state' prop to control the modal open/close state
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-box"
      >
        <Box sx={style}>
          <div id="modal-modal-img" className="modal_img_box">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {desc}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
