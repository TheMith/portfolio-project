import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { ErrorPage } from './pages/ErrorPage';

const base = '/portfolio-project';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: `${base}/about`, element: <About /> },
			{ path: `${base}/skills`, element: <Skills /> },
			{ path: `${base}/*`, element: <ErrorPage /> },
		],
	},
]);
