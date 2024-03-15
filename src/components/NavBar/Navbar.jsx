import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<Link className='name' to='/'>Estevam Filho</Link>
			<div className="desktopMenu">
				<Link className='desktopMenuListItem' to='/about'>About Me</Link>
				<Link className='desktopMenuListItem' to='/skills'>My Skills</Link>
				<Link className='desktopMenuListItem' to='/contact'>Contact Me</Link>
			</div>
		</nav>
	);
}
