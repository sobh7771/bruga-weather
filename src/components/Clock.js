import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import tz_lookup from 'tz-lookup';

const Clock = ({ lat, lon }) => {
	const timezone = tz_lookup(lat, lon);

	const [time, setTime] = useState(() => moment.tz(timezone).format('h:mm A'));

	useEffect(() => {
		setInterval(() => {
			setTime(moment.tz(timezone).format('h:mm A'));
		}, 1000);
	}, [timezone]);

	return <span>{time}</span>;
};

export default Clock;
