import React from "react";

import "./Card.css";

export default function Card({ title, subtitle, desc, link, img, pos }) {
  return (
    <a
      href={link}
      className={[1, 3].includes(pos) ? "card-outline big" : "card-outline"}
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
