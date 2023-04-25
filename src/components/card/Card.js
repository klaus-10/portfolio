import React from "react";

import "./Card.css";

export default function Card({ title, subtitle, desc, link }) {
  return (
    <a href={link} className="card-outline">
      <div className="card">
        <div className="card-info">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
        <div className="card-desc">
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
}
