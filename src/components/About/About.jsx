import './About.css';
import eu from '../../assets/eu.jpg';

export function About() {
	return (
		<section id='about'>
			<div className='aboutSection'>
				<div className='aboutInfo'>
					<p className='aboutTitle'>Who Am I</p>
					<p className="aboutDesc">I'm Estevam Filho, a 19-year-old college student who discovered my passion for programming when I started college. I spend my time watching series and video-gaming, right now i am aiming to become a Web Developer.</p>
				</div>
				<img src={eu} alt="" className='bg' />
			</div>
		</section>
	);
}
