import React from "react";

import "./FunCard.css";

export default function FunCard({ title, subtitle, desc, link, img, pos }) {
  return (
    <a
      href={link}
      className={
        [1, 2, 5, 6].includes(pos) ? "card-outline big2" : "card-outline"
      }
    >
      <div className="card">
        <div className="card-info">
          <div className="card-info-title">
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
          </div>
          <div className="card-desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="card-img">
          <img src={img} alt="" />
        </div>
      </div>
    </a>
  );
}
