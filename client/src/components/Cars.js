import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../store';
import { useThunk } from '../hooks/use-thunk';
import CarDetails from './CarDetails';

function Cars() {
	const [doFetchData, isLoadingData, loadingDataError] = useThunk(fetchData);

	const { data } = useSelector((state) => {
		return state.safety;
	});
	useEffect(() => {
		doFetchData();
	}, [doFetchData]);

	let content;
	if (isLoadingData) {
		content = <div>Loading Data...</div>;
	} else if (loadingDataError) {
		content = <div>Error fetching data...</div>;
	} else {
		return (
			<CarDetails
				data={data}
				index={data.index}
			/>
		);
	}
	return (
		<div>
			Cars
			{content}
		</div>
	);
}

export default Cars;
