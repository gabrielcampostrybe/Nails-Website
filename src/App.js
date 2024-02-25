import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './mainPages/AboutMe';
import Gallery from './mainPages/Gallery';
import HomePage from './mainPages/HomePage';
import Products from './mainPages/Products';
import ConstructorGel from './productsPages/ConstructorGel';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/aboutme' element={<AboutMe />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/constructor-gel' element={<ConstructorGel />} />
				<Route path='/products/base-cover' element={<ConstructorGel />} />
				<Route path='/products/top-coat' element={<ConstructorGel />} />
				<Route path='/products/nail-polish' element={<ConstructorGel />} />
				<Route path='/products/fiber' element={<ConstructorGel />} />
				<Route path='/products/nail-drill' element={<ConstructorGel />} />
				<Route path='/products/step-1-and-2' element={<ConstructorGel />} />
				</Routes>
		</Router>
	);
};

export default App;
