import React from 'react';
import Navbar from '../components/Navbar';
import passo1e2 from '../img/passo1e2.png';
import './Step1And2.css';

const Step1And2 = () => {
	return (
		<>
			<Navbar />
			<div className='step-1-and-2'>
				<h2>Passo 1 e Passo 2</h2>
				<img
					src={passo1e2}
					alt='imagem do passo 1 e passo 2'
					className='step-1-and-2-img'
				/>
				<h3>Descrição do produto</h3>
				<div className='step-1-and-2-desc'>
					<h4>Passo 1</h4>
					<p>Desidrata, desengordura e retira a umidade das unhas naturais;</p>
					<h4>Passo 2</h4>
					<p>
						Fixador PH Bonder, adesivador de gel com película dual coat
						garantindo aderência extra evitando infiltrações;
					</p>
				</div>
			</div>
		</>
	);
};

export default Step1And2;
