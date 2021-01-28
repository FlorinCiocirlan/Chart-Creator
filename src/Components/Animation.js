<<<<<<< Updated upstream
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import fifthImage from '../fifthImage.png';
import '../Animation.css';
import ButtonPage from './GetStartedButton';
=======
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import fifthImage from "../fifthImage.png";
import "../Animation.css";
import ButtonPage from "./GetStartedButton";
>>>>>>> Stashed changes

// import './styles.css';

class FullpageWrapper extends React.Component {
<<<<<<< Updated upstream
	render() {
		return (
			<div className='home-div'>
				<img alt="people who use chart app" src={fifthImage} fluid className='home-image' />
				<ButtonPage />
			</div>
		);
	}
=======
  render() {
    return (
      <div className="home-div">
        <span className="title-container">
          <h1 className="title">
            Make your <span style={{ fontWeight: "bolder" }}>charts</span>{" "}
            online
          </h1>
        </span>
        <img src={fifthImage} fluid className="home-image" />
        <ButtonPage />
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default FullpageWrapper;
