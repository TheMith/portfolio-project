import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import './index.css';

function App() {
  
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);

	return (
		<div className='app'>
			<header>
				<nav className='ui pointing secondary menu'>
					<div className='header item'>Portfolio</div>
					<NavLink to='/' className='item'>
						Home
					</NavLink>
					<Toggle checked={isDark} onChange={({ target }) => setIsDark(target.checked)} icons={{ checked: '🌙', unchecked: '🔆' }} aria-label='Dark mode toggle' />
				</nav>
			</header>

			<div className='ui container' style={{ marginTop: 30, backgroundColor: 'lightsalmon', padding: 30 }}>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
