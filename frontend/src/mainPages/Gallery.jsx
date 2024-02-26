import React from 'react';
import Navbar from '../components/Navbar';
import unha1 from '../galleryImg/unha1.png';
import unha2 from '../galleryImg/unha2.png';
import unha3 from '../galleryImg/unha3.png';
import unha4 from '../galleryImg/unha4.png';
import unha5 from '../galleryImg/unha5.png';
import unha6 from '../galleryImg/unha6.png';
import './Gallery.css';

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<br />
			<h2 className='gallery-title'>Galeria</h2>
			<div className='gallery-container'>
				<img src={unha1} alt='' className='gallery-item' />
				<img src={unha2} alt='' className='gallery-item' />
				<img src={unha3} alt='' className='gallery-item' />
				<img src={unha4} alt='' className='gallery-item' />
				<img src={unha5} alt='' className='gallery-item' />
				<img src={unha6} alt='' className='gallery-item' />
			</div>
		</div>
	);
};

export default Gallery;
