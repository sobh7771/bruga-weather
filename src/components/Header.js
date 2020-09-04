import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	padding: 1.6rem 5rem;
	box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);
	font-size: 2.4rem;
	background: #fff;

	> a {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}
`;

const Icon = styled.i`
	color: #fff;
	background: #15aabf;
	text-shadow: 2px 2px 0 #0b5863;
	padding: 1.1rem;
	border-radius: 4px;
`;

const Title = styled.h1`
	font-family: Roboto;
	font-weight: 500;
	font-size: inherit;
	letter-spacing: 1px;
	margin-left: 8px;
`;

export default () => (
	<Header>
		<a href="/">
			<Icon className="fas fa-cloud-sun-rain" />
			<Title>Bruga Weather</Title>
		</a>
	</Header>
);
