import React from 'react';
import Navbar from '../components/Navbar';
import capaBase from '../img/capabase.png';

const BaseCover = () => {
	return (
		<>
			<Navbar />
			<h3>Capa Base</h3>
			<img src={capaBase} alt='imagem da capa base' />
		</>
	);
};

export default BaseCover;
