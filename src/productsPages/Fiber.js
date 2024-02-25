import React from 'react';
import Navbar from '../components/Navbar';
import fibra from '../img/fibra.png';

const Fiber = () => {
	return (
		<>
			<Navbar />
			<h3>Fibra</h3>
			<img src={fibra} alt='imagem da fibra' />
		</>
	);
};

export default Fiber;
