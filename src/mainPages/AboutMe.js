import React from 'react';
import Navbar from '../components/Navbar';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div>
			<Navbar />
			<br />
			<h2 className='about-me-title'>Sobre</h2>
			<div className='about-me-description'>
				<p>
					Olá! Me chamo Suzane e estou feliz em recebê-lo(a) aqui! Tenho 21 anos
					e sou uma entusiasta do mundo da beleza e dos cuidados pessoais.
					Atualmente, estou no 6° período do curso de Biomedicina.
				</p>
				<p>
					Além disso, completei um curso de especialização em unhas de fibra de
					vidro. É uma área que me fascina pela sua versatilidade e
					criatividade.
				</p>
				<p>
					Busco combinar minha formação em biomedicina com minha paixão pela
					estética para compreender melhor a ciência por trás da beleza. Meu
					objetivo é me tornar uma especialista em estética, ajudando as pessoas
					a se sentirem confiantes e felizes consigo mesmas.
				</p>
				<p>
					Neste espaço, compartilho minha jornada, experiências e dicas sobre
					beleza e cuidados pessoais. Espero que encontre inspiração e motivação
					aqui. Seja bem-vindo(a) e vamos juntos nessa jornada! 🌟
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
