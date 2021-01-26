import React from 'react';
import './footer-style.css';

export default function Footer() {
	return (
		<footer
			id='footer'
			// className='bg-light text-center text-lg-start align-self-end footer'
			className="footer fixed-bottom"
		>
			{/* <div className='container p-4'>
				<div className='row'>
					<div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
						<h5 className='text-uppercase'>Footer Content</h5>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
						</p>
					</div>

					<div className='col-lg-3 col-md-6 mb-4 mb-md-0 ml-auto'>
						<h5 className='text-uppercase mb-0'>Links</h5>

						<ul className='list-unstyled'>
							<li>
								<a href='#!' className='text-dark'>
									Link 1
								</a>
							</li>
							<li>
								<a href='#!' className='text-dark'>
									Link 2
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div> */}

			<div className='text-center p-3 copyright'>© 2021 Copyright: CodeCool</div>
		</footer>
	);
}
