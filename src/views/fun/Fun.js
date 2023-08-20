import React from "react";
import "./Fun.css";
import data from "./Fun.json";
import FunCard from "../../components/fun-card/FunCard";

export default function Fun() {
  return (
    <div className="fun">
      <div className="about-title">
        {/* <h1>Fun.</h1> */}
        <h1>Cooming soon.</h1>
      </div>

      <div className="grid-wrap flex-center">
        <div className="about-skill ww">
          {/* {data?.skills_2?.map((el, pos) => (
            // <div className="skill-item">
            <FunCard
              key={pos + "v"}
              title={el.name}
              desc={el.desc}
              pos={pos}
              img={el.img}
            />
            // </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
