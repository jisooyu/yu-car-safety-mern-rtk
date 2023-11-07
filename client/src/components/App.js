import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import CarSafety from './CarSafety';
import Cars from './Cars';

function App() {
	return (
		<div className='container'>
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
		</div>
	);
}

export default App;
