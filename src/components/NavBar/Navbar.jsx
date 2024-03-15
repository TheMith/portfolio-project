import React from 'react';
import { Link } from 'react-router-dom';
import toggle_light from '../../assets/toggle_light.png';
import toggle_dark from '../../assets/toggle_dark.png';

export default function Navbar({ theme, setTheme }) {

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<nav className='navbar'>
			<Link className='name' to='/'>Estevam Filho</Link>
			<div className="desktopMenu">
				<Link className='desktopMenuListItem' to='/about'>About Me</Link>
				<Link className='desktopMenuListItem' to='/skills'>My Skills</Link>
				<Link className='desktopMenuListItem' to='/contact'>Contact Me</Link>
			</div>
			<img onClick={toggleTheme} src={theme === 'light' ? toggle_light : toggle_dark} className='navbar-toggle-icon' />
		</nav>
	);
}
