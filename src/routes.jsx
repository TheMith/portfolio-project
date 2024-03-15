import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { ErrorPage } from './pages/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/skills', element: <Skills /> },
			{ path: '*', element: <ErrorPage /> },
		],
	},
]);
