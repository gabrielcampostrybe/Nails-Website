import React, { useEffect, useState } from 'react';
import darkModeIcon from '../img/dark-mode-icon.svg';
import instagram from '../img/instagram-logo.png';
import lightModeIcon from '../img/light-mode-icon.svg';
import whatsapp from '../img/whatsapp-logo.png';
import './Navbar.css';

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const darkModeLS = localStorage.getItem('darkMode');
		return darkModeLS ? JSON.parse(darkModeLS) : true;
	});

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem('darkMode', JSON.stringify(newMode));
			return newMode;
		});
	};

	useEffect(() => {
		const body = document.body;
		if (isDarkMode) {
			body.style.backgroundColor = 'rgb(25, 37, 66)';
		} else {
			body.style.backgroundColor = 'rgb(180, 180, 180)';
		}
	}, [isDarkMode]);

	return (
		<nav>
			<div className='navbar'>
				<div className='links'>
					<a className='home-page' href='/'>
						Página Inicial
					</a>
					<br />
					<a className='nails-gallery' href='/gallery'>
						Galeria
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
						<img
							src={instagram}
							alt='instagram logo'
							className='instagram-img'
						/>
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
					<br />
					<div className='darkmode'>
						<img
							src={isDarkMode ? darkModeIcon : lightModeIcon}
							alt={isDarkMode ? 'dark mode icon' : 'light mode icon'}
							className='darkmode-icon'
							onClick={toggleDarkMode}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
