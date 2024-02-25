import React from 'react';
import Navbar from '../components/Navbar';
import brocaA from '../img/brocaagulha.png';
import brocaMC from '../img/brocaminicone.png';

const NailDrill = () => {
	return (
		<>
			<Navbar />
			<h3>Broca Agulha</h3>
			<img src={brocaA} alt='imagem da broca agulha' />
			<h3>Broca Mini Cone</h3>
			<img src={brocaMC} alt='imagem da broca mini cone' />
		</>
	);
};

export default NailDrill;
