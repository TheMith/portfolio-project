import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import React from 'react';
import './index.css';

function App() {

	const current_theme = localStorage.getItem('current-theme');
	const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

	useEffect(() => {
		localStorage.setItem('current-theme', theme);
		document.documentElement.className = theme;
	}, [theme]);

	return (
		<div>
			<Navbar theme={theme} setTheme={setTheme} />
			<div className='ui container'>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
