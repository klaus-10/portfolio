import React from "react";

import "./WorkCard.css";

export default function WorkCard({
  title,
  subtitle,
  desc,
  link,
  img,
  pos,
  click,
}) {
  return (
    <a
      href={link}
      className={
        [1, 2].includes(pos)
          ? "workout-card-outline big-work"
          : "workout-card-outline"
      }
      onClick={click}
    >
      <div className="workout-card">
        <div className="workout-card-info">
          <div className="workout-card-info-title">
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
          </div>
          <div className="workout-card-desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="workout-card-img">
          <img src={img} alt="" />
        </div>
      </div>
    </a>
  );
}
