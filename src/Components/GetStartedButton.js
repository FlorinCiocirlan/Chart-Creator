import React from 'react';
import GradientButton from 'react-linear-gradient-button';
import './button.css';
import { Link } from 'react-router-dom';

const ButtonPage = () => {
	return (
		<div className='button-div'>
			<Link className='link' to='/create'>
				<GradientButton
					className='button'
					theme='Superman'
					padding='10'
				>
					{/* <AiOutlineDown /> */}
					<p className='button-text'>Try now</p>
				</GradientButton>
			</Link>
		</div>
	);
};

export default ButtonPage;
