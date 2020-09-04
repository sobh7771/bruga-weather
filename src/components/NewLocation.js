import React from 'react';
import styled from 'styled-components';
import { commonStyle } from './WeatherConditionItem/style';

const Wrapper = styled.div`
	${commonStyle}
	flex-direction: column;
	width: 24.2rem;
	height: 26.5rem;
	margin: 4rem auto;
	align-items: flex-start;

	> div {
		padding: 1rem 2.5rem;
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;

		&:first-child i {
			font-size: 6.4rem;
			color: #ff922b;
			position: absolute;
			top: 8.5rem;
			left: 50%;
			transform: translateX(-50%);
			margin-bottom: 1.9rem;
		}

		&:last-child {
			border-top: 1px solid #eee;
			padding-top: 0;
			text-align: center;
		}
	}
`;

const Img = styled.img`
	width: 18rem;
	position: absolute;
	left: 50%;
	top: -4.7rem;
	transform: translateX(-50%);
	z-index: 1;
`;

const Title = styled.h3`
	font-family: Roboto;
	font-size: 1.6rem;
	font-weight: 500;
	margin-top: 2.45rem;
`;

const NewLocation = ({ setShowModal }) => {
	return (
		<Wrapper onClick={() => setShowModal(true)}>
			<div>
				<Img
					src="https://brugarolas.github.io/bruga-weather/img/rainy-6.svg?d235ab65ea35c3fcade47b8f5c6c4ae7"
					alt=""
				/>
				<i className="fas fa-city" />
			</div>
			<div>
				<Title>New Location</Title>
				<p>Add weather forecast for a new location</p>
			</div>
		</Wrapper>
	);
};

export default NewLocation;
