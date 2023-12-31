import React from "react";

import "./GridBoxWorkPage.css";

function GridBoxWorkPage({ data }) {
  return (
    <div
      className={
        data.length == 3
          ? "image2 grid-3-space margin-bottom-m"
          : "image2 grid-2-space margin-bottom-m"
      }
    >
      {data?.map((el, ind) => (
        <div className="grid-elem hover-brightness">
          <h3>{el.name}</h3>
          <img src={`${process.env.PUBLIC_URL}/images/${el.img}.png`} alt="" />
        </div>
      ))}
    </div>
  );
}

export default GridBoxWorkPage;
