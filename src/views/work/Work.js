import React from "react";
import WorkCard from "../../components/work-card/WorkCard";
import data from "./Work.json";
import "./Work.css";

export default function Home() {
  return (
    <div className="work">
      <div className="work-title">
        <h1>Hi.I'm Klaus.</h1>
        <h1>A Software Engineer.</h1>
      </div>

      <div className="grid-wrap flex-center">
        <div className="work-card-container ww">
          {data?.done?.map((el, pos) => (
            // <div className="skill-item">
            <WorkCard
              key={pos + "d"}
              title={el.name}
              desc={el.desc}
              pos={pos}
            />
            // </div>
          ))}
        </div>
      </div>

      <div className="about-title2">
        <h1>In Progress.</h1>
      </div>
      <div className="grid-wrap flex-center">
        <div className="work-card-container ww">
          {data?.progress?.map((el, pos) => (
            // <div className="skill-item">
            <WorkCard
              key={pos + "d"}
              title={el.name}
              desc={el.desc}
              pos={pos}
            />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
