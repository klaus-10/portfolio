import React from "react";
import data from "./About.json";
import "./About.css";
import Card from "../../components/card/Card";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me.</h1>
        {/* <p>I love Design, Technology, and Story.</p> */}
      </div>

      <div className="grid-wrap">
        <div className="about-me flex-center">
          <div className="about-me-title"></div>

          <div className="about-me-desc ww">
            {/* <h3>...</h3> */}
            <h2>
              Sono uno sviluppatore informatico in ambiente machine learning
            </h2>
            <p>
              Nato a Gallarate nel 1999. Dopo la laurea ho trovato lavoro come
              Backend developer presso una società informatica in ambito
              finanziario, dove sono stato aggregato al team di sviluppo.
              Tutt'ora il mio ambito lavorativo è questo anche se nel mentre
              cerco sempre di tenermi aggiornato sulle recenti tecnologie in
              ambito IT.
            </p>
            {/* <img src="https://source.unsplash.com/random" /> */}
          </div>
        </div>
      </div>
      <div className="grid-wrap">
        <div className="about-me-collaborate">
          <div className="about-me-collaborate-desc ww">
            {/* <h3>...</h3> */}
            <h2>
              Let's collaborate if you're committed to sustainability,
              education, equality, or carbon neutrality.
            </h2>
            <p>
              I believe we should leave this Earth as good as or better than we
              found it for future generations; my goal is to contribute to those
              ideals in whatever way I can. If you feel the same, I'd love to
              talk.
            </p>
            {/* <img src="https://source.unsplash.com/random" /> */}
          </div>
        </div>
      </div>

      <div className="grid-wrap">
        <div className="about-point grid">
          <div className="point-item entry-1">
            <div>01</div>
            <h3>Make it</h3>
            <p>
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="point-item entry-2">
            <div className="point-count">02</div>
            <h3>Make it</h3>
            <p>
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="point-item entry-3">
            <div>03</div>
            <h3>Make it</h3>
            <p>
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="point-item entry-4">
            <div>04</div>
            <h3>Make it</h3>
            <p>
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="about-me-desc flex-center">
        <h2>Passion</h2>
      </div> */}

      <div className="about-title2">
        <h1>Passions.</h1>
        {/* <p>I love Design, Technology, and Story.</p> */}
      </div>

      <div className="grid-wrap flex-center">
        <div className="about-passion ww">
          {data?.passions?.map((el, pos) => (
            <div key={pos + "b"} className="passion-item">
              <div className="passion-item-img">
                {/* <img src={el.img} alt="" />
                <span className="material-symbols-outlined">
                  fitness_center
                </span> */}
              </div>
              <h3 className="passion-item-title">{el.name}</h3>
              <p className="passion-item-desc">{el.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-title2">
        <h1>Skills.</h1>
        {/* <p>I love Design, Technology, and Story.</p> */}
      </div>
      <div className="grid-wrap flex-center">
        <div className="about-skill ww">
          {data?.skills_2?.map((el, pos) => (
            // <div className="skill-item">
            <Card key={pos + "v"} title={el.name} desc={el.desc} pos={pos} />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
