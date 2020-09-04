import axios from 'axios';

const fetchCity = (city) => {
	return axios
		.get(
			`https://openweathermap.org/data/2.5/find?q=${city}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1597707477562`
		)
		.then((res) => res.data.list);
};

const fetchCityById = (id) => {
	return axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=5fcd53f32a54acb64d5bb7516f0bbd26`
		)
		.then((res) => res.data);
};

const fetchCityList = (IDs) => {
	return axios
		.get(
			`https://api.openweathermap.org/data/2.5/group?id=${IDs}&units=metric&appid=6388e851d2f6b148929ce780a67f971a`
		)
		.then((res) => res.data.list);
};

export { fetchCity, fetchCityById, fetchCityList };
