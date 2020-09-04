import React, { useContext } from 'react';
import WeatherItem from './WeatherConditionItem/WeatherConditionItem';
import styled from 'styled-components';
import { WeatherContext, DELETE } from '../WeatherContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;
	min-height: 24rem;
`;

const WeatherList = () => {
	const { weatherList, dispatch } = useContext(WeatherContext);

	return (
		<TransitionGroup component={Wrapper}>
			{weatherList.map((weatherItem) => (
				<CSSTransition
					key={weatherItem.id}
					timeout={1000}
					classNames="weather-item-">
					<WeatherItem
						{...weatherItem}
						handleClick={() => {
							dispatch({ type: DELETE, payload: weatherItem.id });
							const str = localStorage.getItem('locations');
							const locations = str.split(',');

							const newLocations = locations.filter(
								(location) => +location !== weatherItem.id
							);

							console.log(weatherItem.id, locations);

							console.log(newLocations);

							localStorage.setItem('locations', newLocations.join(','));
						}}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default WeatherList;
