import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me.</h1>
        {/* <p>I love Design, Technology, and Story.</p> */}
      </div>

      <div className="about-me">
        <div className="about-me-title"></div>

        <div className="about-me-desc">
          {/* <h3>...</h3> */}
          <h2>Klaus Shala</h2>
          <h2>
            Sono uno sviluppatore informatico in ambiente machine learning
          </h2>
          <p>
            Nato a Gallarate nel 1999. Dopo la laurea ho trovato lavoro come
            Backend developer presso una società informatica in ambito
            finanziario, dove sono stato aggregato al team di sviluppo. Tutt'ora
            il mio ambito lavorativo è questo anche se nel mentre cerco sempre
            di tenermi aggiornato sulle recenti tecnologie in ambito IT.
          </p>
          {/* <img src="https://source.unsplash.com/random" /> */}
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

      <div className="about-passion"></div>
      <div className="about-skill"></div>
    </div>
  );
}
