import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: Open Sans, sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
    color: #2c3e50;
    background-color: #f8f9fa;
  }

	.weather-item--exit {
		opacity: 1;
		transform: translate3d(2rem, 0, 0) scaleX(0.9);
	}

	.weather-item--exit-active {
		opacity: 0;
		transform: translate3d(-200rem, 0, 0) scaleX(2);
		transition: opacity 1000ms, transform 1000ms;
	}

	.weather-item--enter {
		opacity: 0;
		transform: translate3d(200rem, 0, 0) scaleX(2);
	}

	.weather-item--enter-active {
		opacity: 1;
		transform: translate3d(-2rem, 0, 0) scaleX(0.9);
		transition: opacity 1000ms, transform 1000ms;
	}

	.weather-item--enter-active-done {
		transform: translate3d(0, 0, 0) scaleX(1);
	}
`;
