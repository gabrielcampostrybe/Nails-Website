import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';
import Scheduling from '../components/Scheduling';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<br />
			<h2 className='home-page-title'>Página Inicial</h2>
			<Scheduling />
		</div>
	);
};

export default HomePage;
