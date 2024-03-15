import { Link } from 'react-router-dom';

export function Home() {
	return (
		<section id='home' className="home">
			<div className="homeContent">
				<span className="hello">Hello, </span>
				<span className="homeText">I'm <span className='homeName'>Estevam Filho</span><br /> Web Developer</span>
				<p className="homePara"></p>
				<Link to='/about'><button className='homeButton'>Know me better</button></Link>
			</div>
			<img src="" alt="" />
		</section>
	);
}