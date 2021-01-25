import React from 'react';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import logo from '../../logo.png';

export default function Header() {
	return (
		<Nav defaultActiveKey='/home' as='ul' className='bg-light'>
			<Nav.Item as='li'>
				<Nav.Link href='/home'>
					<Navbar.Brand>
						<img
							className='d-inline-block align-top'
							src={logo}
							width='100px'
							height='90px'
						></img>
					</Navbar.Brand>
				</Nav.Link>
			</Nav.Item>
			<div className='d-flex align-items-center ml-auto mr-5'>
				<Nav.Item
					as='li'
					className='ml-auto mr-3 d-flex align-self-bottom'
				>
					<Nav.Link eventKey='link-1' className='text-dark'>
						About
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as='li'>
					<Nav.Link eventKey='link-2' className='text-dark'>
						Docs
					</Nav.Link>
				</Nav.Item>
			</div>
		</Nav>
	);
}
