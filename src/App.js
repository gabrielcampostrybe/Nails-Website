import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Examples from './pages/Examples';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/examples' element={<Examples />} />
			</Routes>
		</Router>
	);
};

export default App;
