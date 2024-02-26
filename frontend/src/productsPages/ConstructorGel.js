import React from 'react';
import Navbar from '../components/Navbar';
import gelConstrutor from '../img/gelconstrutor.png';
import './ConstructorGel.css';

const ConstructorGel = () => {
	return (
		<>
			<Navbar />
			<div className='constructor-gel'>
				<h2>Gel Construtor</h2>
				<img
					src={gelConstrutor}
					alt='imagem do gel construtor'
					className='constructor-gel-img'
				/>
				<h3>Descrição do produto</h3>
				<div className='constructor-gel-desc'>
					<p>
						Gel para unhas com formulação inovadora. Possui Tecnologia
						CurvaturaSmart que permite Estrutura Naturalidade com alta
						resistência e durabilidade. Desenvolvido dentro dos nossos
						laboratórios, o Gel Construtor Querido Nude Bluwe foi pensado
						minuciosamente e performa incrivelmente em qualquer tipo de unha
						natural.
					</p>
					<p>
						Os Géis Construtores Bluwe são tudo o que há de mais moderno do
						mercado de matéria prima. Fizemos uma formulação com Tecnologia
						Smart, ou seja, conseguimos uma curvatura de memória, onde não
						precisa o gel ser rígido para segurar a curvatura. Com isso, os
						alongamentos não ficam duros e quebradiços, e sim flexíveis e com
						memória de formato. Com ele é mais seguro para alcançar a tão
						almejada Naturalidade.
					</p>
					<p>Viscosidade ideal para ser auto nivelante sem escorrer.</p>
					<p>
						Pode ser usado em todas as etapas: capa base para unhas normais,
						extensão e ponto de tensão.
					</p>
					<p>
						<b>O encanto:</b> Viscosidade ideal para manuseio facilitado, nivela
						mas não escorre com facilidade.Formulação incrível para
						naturalidade. Baixo aquecimento.
					</p>
					<p>
						<b>COR:</b> Querido Nude - Nude intenso de cobertura média com
						subtom quente.
					</p>
					<p>
						<b>MODO DE USO:</b> Aplique camadas do produto sobre a unha,
						moldando da forma desejada e coloque para catalisar sob luz uv por
						120 segundos.
					</p>
					<p>
						<b>INDICAÇÃO DE USO:</b> O Gel Construtor Querido Nude Bluwe pode
						ser usado em todas as etapas do alongamento, da capa base ao ponto
						de tensão.
					</p>
					<p>
						<b>COMPOSIÇÃO:</b> Acrylates Copolymer, Trimethylolpropane
						Trimethacrylate, Triethylene Glycol Dimethacrylate, Isobornyl
						Methacrylate, Trimethylbenzoyl Diphenylphosphine Oxide, Benzoyl
						Isopropanol, Poly Methyl Styrene Isopropanol Ketone,
						Trimethylbenzophenone, Methyl Benzophenone, Methacryloylethyl
						Phosphate, Benzoyl Isopropanol, BHA, Calcium Aluminum Borosilicate.
						Pode conter os corantes: CI 15850, CI 60725, CI 77891, CI 77491, CI
						77019.
					</p>
				</div>
			</div>
		</>
	);
};

export default ConstructorGel;
