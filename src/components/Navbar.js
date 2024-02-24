import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='links'>
				<a href='/'>Home</a>
				<br />
				<a href='/create'>New Blog</a>
			</div>
		</nav>
	);
};

export default Navbar;
