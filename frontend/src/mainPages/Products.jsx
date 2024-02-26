import React from 'react';
import Navbar from '../components/Navbar';
import brocaA from '../img/brocaagulha.png';
import brocaMC from '../img/brocaminicone.png';
import capaBase from '../img/capabase.png';
import esmalteT from '../img/esmaltethunder.png';
import fibra from '../img/fibra.png';
import gelConstrutor from '../img/gelconstrutor.png';
import passo1e2 from '../img/passo1e2.png';
import topCoat from '../img/topcoat.png';
import './Products.css';

const Products = () => {
	return (
		<div>
			<Navbar />
			<div className='products'>
				<br />
				<h2 className='products-title'>Produtos</h2>
				<section className='products-group'>
					<div className='constructor-gel'>
						<a href='/products/constructor-gel'>
							<h3>Gel Construtor</h3>
							<img src={gelConstrutor} alt='imagem do gel construtor' />
						</a>
					</div>
					<div className='base-cover'>
						<a href='/products/base-cover'>
							<h3>Capa Base</h3>
							<img src={capaBase} alt='imagem da capa base' />
						</a>
					</div>
					<div className='top-coat'>
						<a href='/products/top-coat'>
							<h3>Top Coat</h3>
							<img src={topCoat} alt='imagem do top coat' />
						</a>
					</div>
					<div className='nail-polish'>
						<a href='/products/nail-polish'>
							<h3>Esmalte</h3>
							<img src={esmalteT} alt='imagem do esmalte' />
						</a>
					</div>
					<div className='fiber'>
						<a href='/products/fiber'>
							<h3>Fibra</h3>
							<img src={fibra} alt='imagem da fibra' />
						</a>
					</div>
					<div className='needle-nail-drill'>
						<a href='/products/nail-drill'>
							<h3>Broca Agulha</h3>
							<img src={brocaA} alt='imagem da broca agulha' />
						</a>
					</div>
					<div className='mini-cone-nail-drill'>
						<a href='/products/nail-drill'>
							<h3>Broca Mini Cone</h3>
							<img src={brocaMC} alt='imagem da broca mini cone' />
						</a>
					</div>
					<div className='step-1-and-2'>
						<a href='/products/step-1-and-2'>
							<h3>Passo 1 e Passo 2</h3>
							<img src={passo1e2} alt='imagem do passo 1 e passo 2' />
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Products;
