import React from 'react';
import Navbar from '../components/Navbar';
import capaBase from '../img/capabase.png';

const BaseCover = () => {
	return (
		<>
			<Navbar />
			<h3>Capa Base</h3>
			<img src={capaBase} alt='imagem da capa base' />
			<h4>Descrição do produto</h4>
			<div className='base-cover-desc'>
				<br />
				<p>
					Gel para unhas com formulação inovadora. Altíssima aderência à unha
					natural. Desenvolvido dentro dos nossos laboratórios, o Gel Capa Base
					Flex Super Clear Bluwe foi pensado minuciosamente e performa
					incrivelmente em qualquer tipo de unha natural. Gel de altíssima
					flexibilidade e aderência. O Gel Capa Base tem uma aderência surreal!
					Na composição dele adicionamos matérias primas extremamente aderentes.
					Além disso, possui flexibilidade altíssima, sendo indicado para
					qualquer tipo de unha, inclusive as mais finas. Também é excelente
					para aderência das Tip de Gel. Ele pode ser usado para capa base de
					alongamento, blindagens em unhas mais firmes, base para esmaltação em
					gel e aderência de Tip de Gel.
				</p>
				<p>
					<b>O encanto:</b> Incrível para qualquer tipo de unha pois acompanha a
					flexibilidade da unha natural. Não trinca em blindagens.
				</p>
				<p>
					<b>COR:</b> Super Clear - O verdadeiro transparente. Sem fundo
					roxo/azul
				</p>
				<p>
					<b>PRECAUÇÕES:</b> Manter afastado da luz da cabine e/ou da claridade
					solar. Manter longe do alcance de crianças e animais. Em caso de
					contato com os olhos, lave com água em abundância.
				</p>
				<p>
					<b>MODO DE USO:</b> Aplique o produto sobre a unha e catalise sob luz
					UV por 60 segundos.
				</p>
				<p>
					<b>INDICAÇÃO DE USO:</b> Capa base para alongamentos ou esmaltação em
					gel; aplicação de fibra; blindagem.
				</p>
			</div>
		</>
	);
};

export default BaseCover;
