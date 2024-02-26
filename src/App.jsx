import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

function App() {
	return (
		<div className='app'>
			<header>
				<nav className='ui pointing secondary menu'>
					<div className='header item'>Portfolio</div>
					<NavLink to='/' className='item'>Home</NavLink>
				</nav>
			</header>

			<div className='ui container' style={{ marginTop: 30, backgroundColor: 'lightsalmon', padding: 30 }}>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
