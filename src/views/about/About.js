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
            <h2>Hello there!</h2>
            <p>
              I'm Klaus, a dedicated software engineer deeply passionate about
              technology, sports, and continuous learning. Over my year-long
              journey in the IT industry, I've gathered valuable experiences and
              honed various skills that drive my enthusiasm for creating
              innovative solutions.
            </p>
            {/* <img src="https://source.unsplash.com/random" /> */}
          </div>
        </div>
      </div>
      <div className="grid-wrap">
        <div className="about-me-collaborate">
          <div className="about-me-collaborate-desc ww">
            {/* <h3>...</h3> */}
            <h2>I'm eager to join forces and create extraordinary results!</h2>
            <p>
              Whether kickstarting a fresh project or enhancing an ongoing one,
              my focus is on cultivating teamwork to accomplish exceptional
              outcomes collaboratively.
            </p>
            {/* <img src="https://source.unsplash.com/random" /> */}
          </div>
        </div>
      </div>

      <div className="grid-wrap">
        <div className="about-point grid">
          <div className="point-item entry-1">
            <div>01</div>
            <h3>Building Solid Foundations</h3>
            <p>
              A solid development plan is key to any successful project. I
              prioritize crafting prototypes, ensuring a clear vision of the
              application, and enabling optimal development. I believe in
              kickstarting projects with a collaborative design phase, fostering
              a shared understanding among team members.
            </p>
          </div>
          <div className="point-item entry-2">
            <div className="point-count">02</div>
            <h3>Streamlined Development Processes</h3>
            <p>
              Continuous Integration and Deployment are integral to my approach.
              Leveraging tools like Jenkins and GitHub Actions, I automate
              builds and deployments, enhancing efficiency and reducing errors
              throughout the development lifecycle.
            </p>
          </div>
          <div className="point-item entry-3">
            <div>03</div>
            <h3>Embracing Agile Methodologies</h3>
            <p>
              Proficient in agile methodologies like Scrum and Kanban, I
              recognize their effectiveness in project management. Using tools
              like Jira and Trello, I ensure seamless progress tracking and
              timely project deliveries within agile teams.
            </p>
          </div>
          <div className="point-item entry-4">
            <div>04</div>
            <h3>Commitment to Growth</h3>
            <p>
              My commitment extends to continuous personal and professional
              growth. Regularly engaging in conferences, workshops, and online
              courses keeps me abreast of industry trends. Moreover, I find joy
              in mentoring and supporting others in their career journeys.
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
            <Card
              key={pos + "v"}
              title={el.name}
              desc={el.desc}
              pos={pos}
              img={el.img}
            />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
