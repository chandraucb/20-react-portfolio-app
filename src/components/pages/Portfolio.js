import React from "react";
import Project from "./Project";
import yumilicous from "../../assets/images/yumilicious.jpeg";
import fit_squad from "../../assets/images/fit-squad.png";

const projects = [
  {
    id: 0,
    name: "Yumilicous",
    type: "Group project",
    technologies: "HTML CSS Javascript",
    descriptionSummary:
      "Our project will be showcasing an application that informs the user of different recipes based on their query.",
    descriptionElaboration:
      "An application that informs the user of different recipes based on their query",
    repoURL: "https://github.com/ccames91/MealWorms",
    demoURL: "https://ccames91.github.io/MealWorms",
    screenshot: yumilicous,
  },
  {
    id: 1,
    name: "Fit Squad",
    type: "Group project",
    technologies: "HTML,CSS,Javascript, Handlebars template engine,MySQL, Sequelize ORM, Node.js, dotenv, heroku, RestFUL api, express-session, connect-session-sequelize",
    descriptionSummary:
      "Our project will be showcasing an application that informs the user of different recipes based on their query.",
    descriptionElaboration:
      "Fit Squad is a health & fitness companion app aimed to keep you motivated and on schedule while navigating your busy life.",
    repoURL: "https://github.com/carlosmb001/fit_squad",
    demoURL: "https://fit-squad-805c3e11f44f.herokuapp.com/dashboard",
    screenshot: fit_squad,
  },
  
];

export default function Portfolio() {
  return (
    <main>
      <h2>My portfolio</h2>
      <p className="mb-5">
        I've built <i>stacks</i> of applications, including full stack, back
        end, front end and command line. You can find them all on{" "}
        <a
          href="https://github.com/chandraucb?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          my Github
        </a>
        . Here are some of my most recent ones!
      </p>
      <Project projects={projects} />
    </main>
  );
}
