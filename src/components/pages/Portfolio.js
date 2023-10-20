import React from "react";
import Project from "./Project";
import yumilicous from "../../assets/images/yumilicious.jpeg";
import fit_squad from "../../assets/images/fit-squad.png";
import socialMediaAPIScreenshot from "../../assets/images/thought_routes.gif" ;
import weather from "../../assets/images/weather.jpg" ;
import jate from "../../assets/images/jate.png" ;
import notestaker from "../../assets/images/notestaker.png" ;
import payitforward from "../../assets/images/payitforward.png" ;

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
  {
    id: 3,
    name: "J-A-T-E",
    type: "Individual",
    technologies: "Webpack, Workbox, PWAs, IndexedDB",
    descriptionSummary:
      "Project to demostrate PWA capabilities",
    descriptionElaboration:
      "A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.",
    repoURL: "https://github.com/chandraucb/19-PWA-TextEditor",
    demoURL: " https://pwa-jate-4061a748ba48.herokuapp.com/",
    screenshot: jate,
  },
  {
    id: 1,
    name: "Notes Taker",
    type: "Individual project",
    technologies: "HTML,CSS,Javascript, ExpressJS",
    descriptionSummary:
      "Our project will be showcasing an application that informs the user of different recipes based on their query.",
    descriptionElaboration:
      "An application to write and save notes. This application uses Express.js as back end and saves and retrieves notes data from a JSON file.",
    repoURL: "https://github.com/chandraucb/11-expressjs-note-taker",
    demoURL: "https://help.heroku.com/O0EXQZTA/how-do-i-switch-branches-from-master-to-main",
    screenshot: notestaker,
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
    repoURL: "https://github.com/chandraucb/18-NoSQL-SocialNetworkAPI",
    demoURL:
      "https://github.com/chandraucb/18-NoSQL-SocialNetworkAPI/blob/main/assets/images/install_start_node.gif",
    screenshot: socialMediaAPIScreenshot,
  },
  {
    id: 5,
    name: "Weather Dashboard",
    type: "Individual project",
    technologies: "Javascript, Moment.js, OpenWeather API",
    descriptionSummary:
      "Weather dashboard application is built using dynamically updated HTML and CSS.",
    descriptionElaboration:
      "Weather Dashboard uses DayJS Libraries and Open Weather API services. All previously search history are maintained using localStorage. This application will display an input form for user to enter a city for research the weather. Each time a search is performed it will be saved to localStorage and generates an actionable button to retrieve weather details for that city.",
    repoURL: "https://github.com/chandraucb/06-ServerSideAPI-WeatherApp",
    demoURL: "https://chandraucb.github.io/06-ServerSideAPI-WeatherApp/",
    screenshot: weather,
  },  
  {
    id: 6,
    name: "Pay It Forward",
    type: "Group project",
    technologies: "MERN Stack, GraphQL, Material UI, Heroku, Emotion CSS",
    descriptionSummary:
      "Volunteer scheduling application built using MERN stack and other modern technologies.",
    descriptionElaboration:
      "To foster compassion, connect volunteers with service projects and build meaningful relationships to create a better society.",
    repoURL: "https://github.com/chandraucb/payitforward",
    demoURL: "https://payitforward-app-46493cd9589e.herokuapp.com",
    screenshot: payitforward,
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
