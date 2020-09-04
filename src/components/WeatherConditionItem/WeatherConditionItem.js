import React from 'react';
import {
	StyledWeatherConditionItem,
	Name,
	Flag,
	Description,
	Unit,
	Degree,
	Times,
} from './style';
import Clock from '../Clock';

const WeatherConditionItem = (props) => {
	const { name, sys, weather, main, coord, handleClick } = props;

	return (
		<StyledWeatherConditionItem>
			<Times className="fas fa-times" onClick={handleClick} />
			<div>
				<Name>
					{name} (
					<Flag
						src={`https://www.countryflags.io/${sys.country}/shiny/32.png`}
						alt=""
					/>
					)
				</Name>
				<Description>
					{weather[0].main} - <Clock {...coord} />
				</Description>
			</div>
			<div>
				<img
					src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt=""
				/>
				<div>
					<Degree>
						{main.temp}
						<Unit>°C</Unit>
					</Degree>
				</div>
			</div>
		</StyledWeatherConditionItem>
	);
};

export default WeatherConditionItem;
