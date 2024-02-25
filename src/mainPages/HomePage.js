import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<br />
			<h2 className='home-page-title'>Página Inicial</h2>
		</div>
	);
};

export default HomePage;
