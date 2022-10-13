import {createGlobalStyle} from 'styled-components';
import { normalize } from 'styled-normalize';

export const colors = {
	primary: {
		linearGradient: 'to right, #6448fe, #600594',
		red: '#ff5252',
	},
	neutral: {
		lightGrayishViolet: '#dedddf',
		darkGrayishViolet: '#8e8593',
		veryDarkViolet: '#21092f'
	},
}

export const breakpoints = {
	desktop: '576px',
}

export const devices = {
	desktop: `(min-width: ${breakpoints.desktop})`,
}

const GlobalStyle = createGlobalStyle`
	${normalize}
	input { 
		box-sizing: border-box;
	}
	body{
		color: ${colors.neutral.veryDarkViolet};
		font-family: 'Space Grotesk', sans-serif;
		font-size: 18px;
	}
	body, #root {
		width: 100%;
		height: 100vh;
	}
`;

export default GlobalStyle;