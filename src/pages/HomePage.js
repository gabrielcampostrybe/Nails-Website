import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<h1 className='title'>Página Inicial</h1>
		</div>
	);
};

export default HomePage;
