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
            <h2>Hello there! My name is Klaus.</h2>
            <p>
              I am a software developer with a passion for technology, sports,
              and knowledge. I have been working in the IT industry for about a
              year now, and I am excited to share with you some of my
              experiences and skills.
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
              Let's collaborate! Contact me to create something amazing together
              or to contribute to a project.
            </h2>
            <p>
              Collaboration is at the core of every successful project, and I
              believe in the importance of creating a collaborative environment
              where the team can work together to achieve common goals.
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
              To start a project, creating a solid development plan is
              essential. For this reason, I consider it essential to dedicate
              time to creating prototypes in order to have a clear vision of the
              application as a whole and ensure optimal development.
              Collaboration between team members is equally important and can be
              facilitated by adequate initial design.
            </p>
          </div>
          <div className="point-item entry-2">
            <div className="point-count">02</div>
            <h3>Continuous Integration and Deployment</h3>
            <p>
              I believe in the value of continuous integration and deployment to
              streamline the software development process. I have experience
              using tools like Jenkins and GitHub Actions to automate builds and
              deployments, making the development process more efficient and
              error-free.
            </p>
          </div>
          <div className="point-item entry-3">
            <div>03</div>
            <h3>Agile Methodologies</h3>
            <p>
              I am well-versed in agile methodologies, such as Scrum and Kanban,
              and I believe in their effectiveness for managing projects. I have
              experience working in agile teams and using tools like Jira and
              Trello to track progress and ensure timely delivery.
            </p>
          </div>
          <div className="point-item entry-4">
            <div>04</div>
            <h3>Learning and Growth</h3>
            <p>
              I am committed to continuous learning and growth, both personally
              and professionally. I regularly attend conferences, workshops, and
              online courses to stay up-to-date with the latest industry trends
              and technologies. I also enjoy mentoring and helping others learn
              and grow in their careers.
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
