import React from 'react';
import Navbar from '../components/Navbar';
import esmalteT from '../img/esmaltethunder.png';
import './NailPolish.css';

const NailPolish = () => {
	return (
		<>
			<Navbar />
			<div className='nail-polish'>
				<h2>Esmalte</h2>
				<img
					src={esmalteT}
					alt='imagem do esmalte'
					className='nail-polish-img'
				/>
				<h3>Descrição do produto</h3>
				<div className='constructor-gel-desc'>
					<p>Reflexos que transmitem a essência da luz!</p>
					<p>
						O esmalte em gel LUZ THUNDER possui fórmula exclusiva com pigmentos
						azuis e brilhos multicoloridos.
					</p>
					<p>Viscosidade ideal para ser auto nivelante sem escorrer.</p>
					<p>
						Efeito reflexivo intensificado pelo flash. Desenvolvido evidenciando
						os mínimos detalhes para que sua beleza se destaque igualmente sob a
						luz natural.
					</p>
					<p>
						<b>MODO DE USO:</b> Aplique o produto sobre o alongamento e/ou sobre
						a blindagem e catalise sob luz UV de 60 a 120 segundos.
					</p>
					<p>
						<b>PRECAUÇÕES:</b> Manter afastado da luz da cabine e/ou da
						claridade solar. Manter longe do alcance de crianças e animais. Em
						caso de contato com os olhos, lave com água em abundância.
					</p>
					<p>
						<b>COMPOSIÇÃO:</b> Acrylate Copolymer, Hidroxietil Metacrilato,
						Trimethylolpropane Trimethacrylate, Triethylene glycol
						dimethacrylate, Trimethylbenzoyl-diphenyl-phosphine oxide, Monometil
						Eter de Hidroquinona, calcium Aluminum Boprosilicate. Pode conter os
						corantes: TITANIUM DIOXIDE, CI77891, CI77002, CI77163, CI47000,
						CI19140, CI60725, CI75470, CI12440, CI74160, CI77510, CI42090,
						CI77491, CI77266, CI77021
					</p>
				</div>
			</div>
		</>
	);
};

export default NailPolish;
