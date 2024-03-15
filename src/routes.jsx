import { createHashRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { ErrorPage } from './pages/ErrorPage';

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: `/about`, element: <About /> },
			{ path: `/skills`, element: <Skills /> },
			{ path: `/contact`, element: <Contact /> },
			{ path: `*`, element: <ErrorPage /> },
		],
	},
]);
