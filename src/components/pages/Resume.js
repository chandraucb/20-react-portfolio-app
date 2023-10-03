import React from "react";
import "../../styles/resume.css";
import resume from "../../assets/pdfs/resume.pdf";

export default function Resume() {
  return (
    <main>
      <h2>My resume</h2>
      <p>
        To view a downloadable copy, click{" "}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          here
        </a>
        . Otherwise, keep reading!
      </p>
      <br />
      <div id="resume-skills" className="d-flex">
        <div className="pe-5">
          <h3>Front-end skills</h3>
          <ul className="formatted-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>React.js</li>
            <li>And, responsive design.</li>
          </ul>
        </div>
        <div className="ps-5">
          <h3>Back-end skills</h3>
          <ul className="formatted-list">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>And, PWAs.</li>
          </ul>
        </div>
      </div>
      <br />
    </main>
  );
}
