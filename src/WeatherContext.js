import React, { useReducer, useMemo, useEffect } from 'react';
import { fetchCityList } from './api';

export const DELETE = 'DELETE';
export const ADD = 'ADD';
export const FETCH = 'FETCH';

const initialState = [];

export const WeatherContext = React.createContext({
	weatherList: initialState,
	dispatch() {},
});

const reducer = (state, { type, payload }) => {
	switch (type) {
		case DELETE:
			return state.filter((el) => el.id !== payload);
		case ADD:
			return [...state, payload];
		case FETCH:
			return payload;
		default:
			return state;
	}
};

const WeatherContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const contextValue = useMemo(() => ({ weatherList: state, dispatch }), [
		state,
	]);

	useEffect(() => {
		const locations = localStorage.getItem('locations');

		if (!locations) return;

		fetchCityList(locations).then((result) => {
			dispatch({ type: FETCH, payload: result });
		});
	}, []);

	return (
		<WeatherContext.Provider value={contextValue}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;
