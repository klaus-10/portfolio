import React from "react";

// mui

import "./Contact.css";
import CustomTextFiels from "../../components/textfield/CustomTextField";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <div className="contact">
      <div className="about-title">
        <h1>Contact</h1>
      </div>

      <div className="grid-wrap flex-center">
        <div className="contact-box ww ">
          <div className="info">
            <CustomTextFiels
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <CustomTextFiels
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
            />
          </div>
          <CustomTextFiels
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <CustomTextFiels
            id="outlined-multiline-static"
            label="AdditionalInfo"
            color="success"
            multiline={true}
            rows={4}
          />

          <div className="contact-btn flex-center">send</div>
        </div>
      </div>
    </div>
  );
}
