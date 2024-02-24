import React from 'react';
import instagram from '../img/instagram-logo.png';
import whatsapp from '../img/whatsapp-logo.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='links'>
				<a className='home-page' href='/'>
					Página Inicial
				</a>
				<br />
				<a className='nails-examples' href='/examples'>
					Unhas
				</a>
				<br />
				<a className='products' href='/products'>
					Produtos
				</a>
				<br />
				<a className='about-me' href='/aboutme'>
					Sobre
				</a>
				<br />
				<a
					className='instagram'
					href='https://www.instagram.com/suzane_fgd/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={instagram} alt='instagram logo' className='instagram-img' />
				</a>
				<br />
				<a
					className='whatsapp'
					href='https://wa.me/553498934019'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={whatsapp} alt='whatsapp logo' className='whatsapp-img' />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
