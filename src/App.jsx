import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import React from 'react';
import './index.css';

function App() {

	return (
		<div className='app'>
			<Navbar />
			<div className='ui container'>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
