import React from 'react';
import { useJsonData } from '../../services/hook.js';
import eu from '../../assets/eu.jpg';

export function About() {
	const jsonData = useJsonData();

	if (!jsonData) {
		return <div>Loading...</div>;
	}

	return (
		<section id='about'>
			<div className='aboutSection'>
				<div className='aboutInfo'>
					<p className='aboutTitle'>{jsonData.about.title}</p>
					<p className="aboutDesc">{jsonData.about.description}</p>
				</div>
				<img src={eu} alt="" className='bg' />
			</div>
		</section>
	);
}
