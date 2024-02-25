import React from 'react';
import Navbar from '../components/Navbar';
import topCoat from '../img/topcoat.png';
import './TopCoat.css';

const TopCoat = () => {
	return (
		<>
			<Navbar />
			<div className='top-coat'>
				<h2>Top Coat</h2>
				<img src={topCoat} alt='imagem do top coat' className='top-coat-img' />
				<h3>Descrição do produto</h3>
				<div className='top-coat-desc'>
					<p>
						Top Coat para unhas com formulação inovadora. Desenvolvido dentro
						dos nossos laboratórios, o Top Coat Super Clear Bluwe promove brilho
						intenso e possui viscosidade ideal para aplicar sem escorrer.
						Altíssima flexibilidade para finalizar qualquer tipo de
						procedimento.
					</p>
					<p>
						O Top Coat Clear é super fácil de usar. Não “abre” ao passar as
						camadas. Além disso, a viscosidade dele é ideal para não escorrer
						com facilidade.
					</p>
					<p>
						Formulação super flexível, com aspecto siliconado. Perfeito para
						finalizar qualquer tipo de procedimento, inclusive blindagens. Não
						lasca.
					</p>
					<p>
						<b>O encanto:</b> Fórmula flexível, de brilho duradouro e fácil de
						aplicar.
					</p>
					<p>
						<b>COR:</b> Super Clear - O verdadeiro transparente. Sem fundo
						roxo/azul.
					</p>
					<p>
						<b>PRECAUÇÕES:</b> Manter afastado da luz da cabine e/ou da
						claridade solar. Manter longe do alcance de crianças e animais. Em
						caso de contato com os olhos, lave com água em abundância.
					</p>
					<p>
						<b>MODO DE USO:</b> Aplique o produto para finalizar seu
						procedimento e catalise sob luz UV de 60 a 120 segundos (a depender
						da cabine utilizada).
					</p>
					<p>
						<b>INDICAÇÃO DE USO:</b> Finalização dos procedimentos de:
						blindagem, esmaltação em gel, alongamento e pó cromado.
					</p>
					<p>
						<b>COMPOSIÇÃO:</b> Acrylates Copolymer, Trimethylbenzoyl
						Diphenylphosphine Oxide, Benzoyl Isopropanol, Poly Methyl Styrene
						Isopropanol Ketone, Trimethylbenzophenone, Methyl Benzophenone,
						Trimethylolpropane Trimethacrylate, Isobornyl Methacrylate,
						Hydroxycyclohexyl Phenyl Ketone, Benzoyl Isopropanol, BHA, Calcium
						Aluminum Borosilicate. Pode conter os corantes: CI 77891, CI 77019,
						CI 15850, CI 60725, CI 77491, CI 77020, CI 77021.
					</p>
				</div>
			</div>
		</>
	);
};

export default TopCoat;
