import styled from 'styled-components';

const commonStyle = `
  display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #eee;
	box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.05);
	background: #fff;
	border-radius: 4px;
	cursor: pointer;
	transition: 300ms;
	position: relative;

	&:hover {
		border-color: #ddd;
		box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,.12);
	}
`;

const StyledWeatherConditionItem = styled.li`
	${commonStyle}
	line-height: 1.6;
	width: 80%;
	padding: 0 3.5rem 0 1.5rem;
	padding-right: 7rem;

	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}

	div:last-of-type {
		display: flex;
		align-items: center;
	}
`;

const Name = styled.p`
	font-family: Roboto;
	color: #597ea2;
	display: flex;
	align-items: center;
	font-size: 1.8rem;
`;

const Flag = styled.img`
	width: 2.4rem;
`;

const Description = styled.p`
	font-size: 1.4rem;
	letter-spacing: 0.4px;
	font-family: Roboto;
	color: #597ea2;
`;

const Degree = styled.p`
	font-size: 4rem;
	position: relative;
`;

const Unit = styled.div`
	position: absolute;
	font-size: 1.6rem;
	top: 1rem;
	right: -1.5rem;
	font-family: Roboto;
	font-weight: 300;
`;

const Times = styled.i`
	position: absolute;
	font-size: 2.4rem;
	top: 10px;
	opacity: 0;
	transition: all 0.2s;
	right: 1.3rem;
	color: #e53935;

	${StyledWeatherConditionItem}:hover & {
		opacity: 0.7;
	}
`;

export {
	commonStyle,
	StyledWeatherConditionItem,
	Name,
	Flag,
	Description,
	Unit,
	Degree,
	Times,
};
