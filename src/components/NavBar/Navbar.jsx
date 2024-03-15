import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<Link className='name' to='/'>Estevam Filho</Link>
			<div className="desktopMenu">
				<Link className='desktopMenuListItem' to='/portfolio-project/about'>About Me</Link>
				<Link className='desktopMenuListItem' to='/portfolio-project/skills'>My Skills</Link>
			</div>
			<div className='icons'>
				<a href=""><i className="fab fa-linkedin"></i></a>
			</div>
		</nav>
	);
}
