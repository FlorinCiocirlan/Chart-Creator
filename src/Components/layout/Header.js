import React from 'react';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

export default function Header() {
	return (
		<Nav defaultActiveKey='/home' as='ul' className='bg-light'>
			<Nav.Item as='li'>
				<Link to='/'>
					<Navbar.Brand>
						<img
							className='d-inline-block align-top logo'
							src={logo}
							width='200px'
							height='80px'
							alt="logo"
						></img>
					</Navbar.Brand>
				</Link>
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
				<Nav.Link eventKey='link-2' >
					<Link to="/docs" className='text-dark'>Docs</Link>
				</Nav.Link>
			</Nav.Item>
			</div>
		</Nav>
	);
}
