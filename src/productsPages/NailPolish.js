import React from 'react';
import Navbar from '../components/Navbar';
import esmalteT from '../img/esmaltethunder.png';

const NailPolish = () => {
	return (
		<>
			<Navbar />
			<h3>Esmalte</h3>
			<img src={esmalteT} alt='imagem do esmalte' />
		</>
	);
};

export default NailPolish;
