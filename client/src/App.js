import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import CarSafety from './components/CarSafety';
import Cars from './components/Cars';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Landing />}
				/>
				<Route
					path='/safety'
					element={<CarSafety />}
				/>
				<Route
					path='/display'
					element={<Cars />}
				/>
			</Routes>
		</>
	);
}

export default App;
