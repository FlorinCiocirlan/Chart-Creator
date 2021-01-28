import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import fifthImage from "../fifthImage.png";
import "../Animation.css";
import ButtonPage from "./GetStartedButton";

class FullpageWrapper extends React.Component {
  render() {
    return (
      <div className="home-div">
        <span className="title-container">
          <h1 className="title">
            Make your <span style={{ fontWeight: "bolder" }}>charts</span>{" "}
            online
          </h1>
        </span>
        <img src={fifthImage} alt="home-image" fluid className="home-image" />
        <ButtonPage />
      </div>
    );
  }
}

export default FullpageWrapper;
