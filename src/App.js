import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';
import Examples from './pages/Examples';
import HomePage from './pages/HomePage';
import Products from './pages/Products';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/examples' element={<Examples />} />
				<Route path='/aboutme' element={<AboutMe />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</Router>
	);
};

export default App;
