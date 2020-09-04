import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchCity } from '../api';

const Form = styled.form`
	display: flex;
	align-items: center;
	margin-top: 2rem;

	& input {
		font: inherit;
		font-size: 1.2rem;
		font-weight: 500;
		border: 2px solid #de8646;
		border-radius: 4px 0 0 4px;
		padding: 0.6rem;
		width: calc(100% - 105px);
	}

	& button {
		font-family: Roboto;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 0.5rem 1.2rem;
		height: 3.2rem;
		width: 10.5rem;
		background-color: #de8646;
		color: #fff;
		border: 0;
		border-radius: 0 4px 4px 0;
		cursor: pointer;
	}
`;

const CityForm = ({ setCityList }) => {
	const [city, setCity] = useState('');

	const handleChange = (e) => setCity(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetchCity(city).then((cityList) => {
			setCityList(cityList);
			setCity('');
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<input
				type="text"
				name="city"
				placeholder="Type city..."
				value={city}
				onChange={handleChange}
			/>
			<button type="submit">Search</button>
		</Form>
	);
};

export default CityForm;
