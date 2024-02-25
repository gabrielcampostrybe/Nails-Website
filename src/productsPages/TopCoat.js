import React from 'react';
import Navbar from '../components/Navbar';
import topCoat from '../img/topcoat.png';

const TopCoat = () => {
	return (
		<>
			<Navbar />
			<h3>Top Coat</h3>
			<img src={topCoat} alt='imagem do top coat' />
		</>
	);
};

export default TopCoat;
