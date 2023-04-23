import React from "react";

import "./Work.css";

export default function WorkCard({ title, subtitle }) {
  return (
    <div className="work-card">
      <div className="work-card-title">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </div>
    </div>
  );
}
