import React from "react";
import profileIcon from "../../assets/images/profile.svg";
import "../../styles/about.css";

export default function About({ handlePageChange }) {
  return (
    <main>
      <h3>About me</h3>
      <div id="about">
        <div id="profile-icon">
          <img src={profileIcon} alt="Chandrasekar Mohan" />
        </div>
        <div id="text">
          <p>Chandrasekar is a versatile web developer has extensive history in developing application using various web technologies. His dedication to continuously learning about new web development trends and concepts has made him a valuable member of the team. With over 20 years of experience and a bachelors in engineering, his expertise can help customers modernize with websites and appeal to expanding customer populations.</p>
          </div>
          </div>
    </main>
  );
}
