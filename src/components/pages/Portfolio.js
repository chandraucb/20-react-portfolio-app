import React from "react";
import Project from "./Project";
import proScreenshot from "../../assets/images/proScreenshot.png";
import techBlogScreenshot from "../../assets/images/techBlogScreenshot.png";
import pawfectMatchScreenshot from "../../assets/images/pawfectMatchScreenshot.png";
import recipeFindrScreenshot from "../../assets/images/recipeFindrScreenshot.png";
import socialMediaAPIScreenshot from "../../assets/images/socialMediaAPIScreenshot.png";
import textEditorScreenshot from "../../assets/images/textEditorScreenshot.png";
import weatherDashboardScreenshot from "../../assets/images/weatherDashboardScreenshot.png";
import portfolioScreenshot from "../../assets/images/portfolioScreenshot.png";

const projects = [
  {
    id: 0,
    name: "Pro",
    type: "Individual project",
    technologies: "Mongoose, Express, React, Node, REST",
    descriptionSummary:
      "Full stack application that predicts when a software project will be complete.",
    descriptionElaboration:
      "After entering information about the people in your team and what they'll be working on, Pro produces an estimation of when each person is expected to finish their part of the project, allowing the user to plan projects more accurately.",
    repoURL: "https://github.com/hayleyarodgers/project-management-tool",
    demoURL: "https://ccames91.github.io/MealWorms",
    screenshot: proScreenshot,
  },
  {
    id: 1,
    name: "Tech blog",
    type: "Individual project",
    technologies: "Node.js, Express.js, Sequelize, Handlebars",
    descriptionSummary:
      "Full stack application where developers can publish and comment on blog posts.",
    descriptionElaboration:
      "Users can post, update and delete their thoughts on development-related topics. This aims to help promote the sharing of information between people.",
    repoURL: "https://github.com/hayleyarodgers/tech-blog",
    demoURL: "https://hayleyarodgers-tech-blog.herokuapp.com/",
    screenshot: techBlogScreenshot,
  },
  {
    id: 2,
    name: "Pawfect Match",
    type: "Group project: team lead, front end designer",
    technologies: "Node.js, Express.js, Sequelize, Handlebars",
    descriptionSummary:
      "Full stack application that matches pets needing adoption with new owners.",
    descriptionElaboration:
      "Users can post their pet for adoption or respond to posts for adoption. This aims to help give adoptive pets a second chance and help people access the benefits of having a pet.",
    repoURL: "https://github.com/hayleyarodgers/pawfect-match",
    demoURL: "https://pawfect---match.herokuapp.com/",
    screenshot: pawfectMatchScreenshot,
  },
  {
    id: 3,
    name: "Recipe Findr",
    type: "Group project: team lead, functions related to data persistence",
    technologies: "Fetch API, Youtube API, Spoonacular API",
    descriptionSummary:
      "Front end application that gives users video tutorials for recipes using ingredients they have at hand.",
    descriptionElaboration:
      "Users can enter up to three ingredients of their choice, before selecting a recipe and being given a corresponding video tutorial. This aims to help empower the user to try new meals, in addition to reducing time spent shopping and food wastage.",
    repoURL: "https://github.com/hayleyarodgers/recipe-finder",
    demoURL: "https://hayleyarodgers.github.io/recipe-finder/",
    screenshot: recipeFindrScreenshot,
  },
  {
    id: 4,
    name: "Social Network API",
    type: "Individual project",
    technologies: "Node.js, Express.js, MongoDB, Mongoose",
    descriptionSummary:
      "Back end for a social network web application for sharing thoughts with friends.",
    descriptionElaboration:
      "Users can share their thoughts, react to friends’ thoughts and create a friend list. This API would be particularly useful for a social media startup wanting a NoSQL database so their website can handle large amounts of unstructured data.",
    repoURL: "https://github.com/hayleyarodgers/social-network-api",
    demoURL:
      "https://drive.google.com/file/d/1ukaohNaUZ7Fchgvq31qvmOVNolPErSYx/view?usp=sharing",
    screenshot: socialMediaAPIScreenshot,
  },
  {
    id: 5,
    name: "Text Editor",
    type: "Individual project",
    technologies: "Webpack, Workbox, PWAs, IndexedDB",
    descriptionSummary:
      "Progressive web application for taking notes or code snippets.",
    descriptionElaboration:
      "The use of code bundling, caching, a service worker and an IndexedDB database mean that notes can be taken with or without an internet connection. This means the user can reliably retrieve their notes for later use.",
    repoURL: "https://github.com/hayleyarodgers/pwa-text-editor",
    demoURL: "https://hayleyarodgers-pwa-text-editor.herokuapp.com/",
    screenshot: textEditorScreenshot,
  },
  {
    id: 6,
    name: "Weather Dashboard",
    type: "Individual project",
    technologies: "Javascript, Moment.js, OpenWeather API",
    descriptionSummary:
      "Front end application that shows the current and predicted weather for a selected city.",
    descriptionElaboration:
      "There is a search function that allows the user to select a city, which is then added to the search history. The user is then able to look through their search history and click between the weather for multiple cities. This may be particularly useful when travelling.",
    repoURL: "https://github.com/hayleyarodgers/weather-dashboard",
    demoURL: "https://hayleyarodgers.github.io/weather-dashboard/",
    screenshot: weatherDashboardScreenshot,
  },
  {
    id: 7,
    name: "Portfolio",
    type: "Individual project",
    technologies: "Javascript, React, React-Bootstrap",
    descriptionSummary:
      "Front end application that showcases my skills, experience and examples of my work.",
    descriptionElaboration:
      "This is the code for my current professional portfolio (that is, the site you're seeing now!). This was my first application built using React and it aims to help potential collaborators and employers determine whether I might be a good fit for working with them. ",
    repoURL: "https://github.com/hayleyarodgers/portfolio",
    demoURL: "https://hayleyarodgers.github.io/portfolio/",
    screenshot: portfolioScreenshot,
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
          href="https://github.com/hayleyarodgers?tab=repositories"
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
