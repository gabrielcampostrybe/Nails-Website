import React from 'react';
import Navbar from '../components/Navbar';
import gelConstrutor from '../img/gelconstrutor.png';

const ConstructorGel = () => {
	return (
		<>
			<Navbar />
			<h3>Gel Construtor</h3>
			<img src={gelConstrutor} alt='imagem do gel construtor' />
		</>
	);
};

export default ConstructorGel;
