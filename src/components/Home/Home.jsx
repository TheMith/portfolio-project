import { Link } from 'react-router-dom';
import { useJsonData } from '../../services/hook.js';

export function Home() {

	const jsonData = useJsonData();

	if (!jsonData) {
		return <div>Loading...</div>;
	}

	return (
		<section id='home' className="home">
			<div className="homeContent">
				<span className="hello">{jsonData.home.greeting}, </span>
				<span className="homeText">I'm <span className='homeName'>{jsonData.home.name}</span><br /> {jsonData.home.profession}</span>
				<p className="homePara"></p>
				<Link to='/about'><button className='homeButton'>{jsonData.home.button}</button></Link>
			</div>
			<img src={jsonData.about.image} alt="" /> {/* Use the image from JSON */}
		</section>
	);
}