import React from "react";

import "./TemplateCard.css";
import BasicModal from "../model/Modal";

export default function TemplateCard({
  title,
  subtitle,
  desc,
  link,
  img,
  pos,
}) {
  return (
    <div
      className={
        [1, 2, 5, 6].includes(pos)
          ? "card-outline-template big2 tmp"
          : "card-outline-template tmp"
      }
    >
      <div className="template-card card">
        <div className="tempalte-card-img">
          <img src={img} alt="" />
        </div>
        <div className="template-card-info">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
