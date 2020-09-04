import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import WeatherContextProvider from './WeatherContext';

ReactDOM.render(
	<React.StrictMode>
		<WeatherContextProvider>
			<App />
		</WeatherContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
