import React from "react";
import WorkCard from "../../components/work-card/WorkCard";
import { useNavigate } from "react-router-dom";
import data from "./Work.json";
import "./Work.css";

export default function Work() {
  // navigate
  let navigate = useNavigate();

  const handleOpenWork = (link) => {
    console.log("click");
    // navigate to the link page
    console.log("/work/" + link);

    navigate("/works/" + link);
  };

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
              click={() => handleOpenWork(el.link)}
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
              // click={() => handleOpenWork(el.link)}
            />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
