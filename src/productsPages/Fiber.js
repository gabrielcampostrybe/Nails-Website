import React from 'react';
import Navbar from '../components/Navbar';
import fibra from '../img/fibra.png';
import './Fiber.css';

const Fiber = () => {
	return (
		<>
			<Navbar />
			<div className='fiber'>
				<h2>Fibra</h2>
				<img src={fibra} alt='imagem da fibra' className='fiber-img' />
				<h3>Descrição do produto</h3>
				<div className='fiber-desc'>
					<p>
						Conhecida em todo território nacional, e em territórios
						internacionais, a técnica foi criada pela Lara Machado e tem patente
						requerida junto ao INPI.
					</p>
					<p>
						Praticada e ensinada por muitas profissionais do mundo nails, a
						técnica Fibra Selada não deixa dúvidas de que sua criação foi um
						sucesso!
					</p>
					<p>
						Este Kit Fibra Mágica contém 04 metros de Fibra Mágica - Some que é
						uma beleza!
					</p>
					<p>
						<b>PRECAUÇÕES:</b> Uso reservado a profissionais; manuseie a fibra
						usando luvas. Mantenha fora do alcance de crianças. Evite contato
						com os olhos. Em caso de contato com os olhos, lave imediatamente e
						abundantemente com água e procure o apoio de um médico.
					</p>
					<p>
						<b>COMPOSIÇÃO:</b> Polyester, Silica, Calcium, Aluminium,
						Borosilicate.
					</p>
				</div>
			</div>
		</>
	);
};

export default Fiber;
