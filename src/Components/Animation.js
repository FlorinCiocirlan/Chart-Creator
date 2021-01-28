import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import fifthImage from '../fifthImage.png';
import '../Animation.css';
import ButtonPage from './GetStartedButton';

// import './styles.css';

class FullpageWrapper extends React.Component {
	render() {
		return (
			<div className='home-div'>
				<img alt="people who use chart app" src={fifthImage} fluid className='home-image' />
				<ButtonPage />
			</div>
		);
	}
}

export default FullpageWrapper;
