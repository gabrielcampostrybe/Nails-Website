import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './mainPages/AboutMe';
import Gallery from './mainPages/Gallery';
import HomePage from './mainPages/HomePage';
import Products from './mainPages/Products';
import BaseCover from './productsPages/BaseCover';
import ConstructorGel from './productsPages/ConstructorGel';
import Fiber from './productsPages/Fiber';
import NailDrill from './productsPages/NailDrill';
import NailPolish from './productsPages/NailPolish';
import Step1And2 from './productsPages/Step1And2';
import TopCoat from './productsPages/TopCoat';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/aboutme' element={<AboutMe />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/constructor-gel' element={<ConstructorGel />} />
				<Route path='/products/base-cover' element={<BaseCover />} />
				<Route path='/products/top-coat' element={<TopCoat />} />
				<Route path='/products/nail-polish' element={<NailPolish />} />
				<Route path='/products/fiber' element={<Fiber />} />
				<Route path='/products/nail-drill' element={<NailDrill />} />
				<Route path='/products/step-1-and-2' element={<Step1And2 />} />
			</Routes>
		</Router>
	);
};

export default App;
