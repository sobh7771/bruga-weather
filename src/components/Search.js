import React, { useState } from 'react';
import CityForm from './CityForm';
import CityList from './CityList';

const City = ({ setShowModal }) => {
	const [cityList, setCityList] = useState([]);

	return (
		<div style={{ textAlign: 'center' }}>
			<h4>Add weather forecast for a new location</h4>
			<CityForm setCityList={setCityList} />
			<h4 style={{ marginTop: '5rem' }}>Select City</h4>
			<CityList
				cityList={cityList}
				setShowModal={setShowModal}
				setCityList={setCityList}
			/>
		</div>
	);
};

export default City;
