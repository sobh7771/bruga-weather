import React, { useState } from 'react';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import WeatherList from './WeatherList';
import NewLocation from './NewLocation';
import Search from './Search';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

const customStyles = {
	background: '#f8f9fa',
	padding: '2rem',
	borderRadius: '4px',
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
	width: '52rem',
	minHeight: '20rem',
	height: 'max-content',
	position: 'relative',
	margin: 'auto',
	marginTop: '12rem',
};

const App = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<WeatherList />
			<NewLocation setShowModal={setShowModal} />
			<Rodal
				visible={showModal}
				onClose={() => setShowModal(false)}
				animation="slideDown"
				closeOnEsc={true}
				customStyles={customStyles}>
				<Search setShowModal={setShowModal} />
			</Rodal>
		</React.Fragment>
	);
};

export default App;
