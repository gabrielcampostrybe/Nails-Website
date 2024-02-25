import React from 'react';
import Navbar from '../components/Navbar';
import passo1e2 from '../img/passo1e2.png';

const Step1And2 = () => {
	return (
		<>
			<Navbar />
			<h3>Passo 1 e Passo 2</h3>
			<img src={passo1e2} alt='imagem do passo 1 e passo 2' />
		</>
	);
};

export default Step1And2;
