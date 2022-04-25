import { funk } from '@theme-ui/presets';

// @ts-check

/** @type { import('theme-ui').Theme } */
export const theme = {
	...funk,
	buttons: {
		primary: {
			backgroundColor: 'primary',
			color: 'background',
			fontWeight: 'bold',
		},
		secondary: {
			backgroundColor: 'secondary',
			color: 'background',
			fontWeight: 'bold',
		},
		black: {
			backgroundColor: 'text',
			color: 'background',
			fontWeight: 'bold',
		},
	},
};
