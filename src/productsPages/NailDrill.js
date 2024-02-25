import React from 'react';
import Navbar from '../components/Navbar';
import brocaA from '../img/brocaagulha.png';
import brocaMC from '../img/brocaminicone.png';
import './NailDrill.css';

const NailDrill = () => {
	return (
		<>
			<Navbar />
			<div className='needle-nail-drill'>
				<h2>Broca Agulha</h2>
				<img
					src={brocaA}
					alt='imagem da broca agulha'
					className='nail-drill-img'
				/>
				<h3>Descrição do produto</h3>
				<div className='needle-nail-drill-desc'>
					<br />
					<p>
						A Broca Agulha Diamantada Bluwe é ideal para fazer a preparação da
						unha natural de forma saudável.
					</p>
					<p>Indicada também para fazer a limpeza por baixo da unha natural.</p>
					<p>Granulometria Fina.</p>
				</div>
			</div>
			<div className='mini-cone-nail-drill'>
				<h2>Broca Mini Cone</h2>
				<img
					src={brocaMC}
					alt='imagem da broca mini cone'
					className='nail-drill-img'
				/>
				<h3>Descrição do produto</h3>
				<div className='mini-cone-nail-drill-desc'>
					<br />
					<p>
						A Broca Mini Cone Diamantada Bluwe é ideal para preparação da unha
						natural, para manicure moderna e para nivelamento do gel.
					</p>
					<p>
          Granulometria média, porém por ser diamantada não é muito abrasiva.
					</p>
				</div>
			</div>
		</>
	);
};

export default NailDrill;
