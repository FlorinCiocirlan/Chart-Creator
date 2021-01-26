import React from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Image from 'react-bootstrap/Image';
import firstImage from '../firstphoto.jpg';
import secondImage from '../secondphoto.png';
import thirdImage from '../thirdImage.png';
import forthImage from '../forthImage.png';
import fifthImage from '../fifthImage.png';
import '../Animation.css';

// import './styles.css';

class FullpageWrapper extends React.Component {
	render() {
		return <img src={fifthImage} fluid className='home-image' />;
	}
}

export default FullpageWrapper;
