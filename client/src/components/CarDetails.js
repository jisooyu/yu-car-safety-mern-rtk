function CarDetails({ data }) {
	console.log('car from CarDetails', data);

	const renderedCars = data.map((car, index) => (
		<div
			key={index}
			className='m-3 p-2'
		>
			<h3 className='text-2xl'>{car.carMakerName}</h3>
			{car.models.map((model, modelIndex) => (
				<div key={`model_${index}_${modelIndex}`}>
					<h5>Model Name: {model.modelName}</h5>
					<p>Model Year: {model.modelYear}</p>
					{model.safeties.map((safety, safetyIndex) => (
						<div key={`safety_${index}_${safetyIndex}`}>
							<p>Safety Award: {safety.award}</p>
							<p>Safety Rank: {safety.rank}</p>
							<p>Safety Score: {safety.score}</p>
						</div>
					))}
				</div>
			))}
		</div>
	));

	return <div className='m-3 border rounded'>{renderedCars}</div>;
}
export default CarDetails;
