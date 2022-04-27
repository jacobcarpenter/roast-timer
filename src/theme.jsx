// @ts-check
import { funk } from '@theme-ui/presets';

/** @type { import('theme-ui').Theme } */
export const theme = {
	...funk,
	colors: {
		...funk.colors,
		accent: '#D685FF',
		secondaryAccent: '#6600CC',
	},
	buttons: {
		base: {
			cursor: 'pointer',
			fontWeight: 'bold',
		},
		primary: {
			variant: 'buttons.base',
			backgroundColor: 'primary',
			color: 'background',
			'@media (hover: hover)': {
				'&:hover': {
					backgroundColor: 'accent',
					color: 'primary',
				},
			},
		},
		secondary: {
			variant: 'buttons.base',
			backgroundColor: 'secondary',
			color: 'background',
			'@media (hover: hover)': {
				'&:hover': {
					backgroundColor: 'secondaryAccent',
					color: 'background',
				},
			},
		},
		black: {
			variant: 'buttons.base',
			border: '3px solid',
			borderColor: 'text',
			backgroundColor: 'text',
			color: 'background',
			'@media (hover: hover)': {
				'&:hover': {
					color: 'text',
					backgroundColor: 'background',
				},
			},
		},
	},
};
