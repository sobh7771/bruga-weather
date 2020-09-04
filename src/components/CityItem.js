import React from 'react';
import styled from 'styled-components';
import {
	commonStyle,
	Name,
	Flag,
	Description,
	Degree,
	Unit,
} from './WeatherConditionItem/style';
import { fetchCityById } from '../api';
import { useContext } from 'react';
import { WeatherContext, ADD } from '../WeatherContext';

const Wrapper = styled.li`
	${commonStyle}
	padding:1rem 3.5rem 1rem 1.5rem;
	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}

	div:first-child {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;

const saveToLocalStorage = (id) => {
	let locations = localStorage.getItem('locations');

	if (!locations) locations = id;
	else locations += `,${id}`;

	localStorage.setItem('locations', locations);
};

const CityItem = (props) => {
	const { dispatch } = useContext(WeatherContext);
	const { id, name, sys, weather, main, setShowModal, setCityList } = props;
	const units = Math.round(main.temp - 273.15);

	const handleClick = () => {
		fetchCityById(id).then((city) => {
			dispatch({ type: ADD, payload: city });

			saveToLocalStorage(id);

			// Close modal
			setShowModal(false);
			// Reset cityList
			setCityList([]);
		});
	};

	return (
		<Wrapper onClick={handleClick}>
			<div>
				<Name>
					{name} (
					<Flag
						src={`https://www.countryflags.io/${sys.country}/shiny/32.png`}
						alt=""
					/>
					)
				</Name>

				<Description>{weather[0].main}</Description>
			</div>
			<div>
				<Degree>
					{units}
					<Unit>°C</Unit>
				</Degree>
			</div>
		</Wrapper>
	);
};

export default CityItem;
