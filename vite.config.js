import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: 'theme-ui',
			babel: {
				plugins: [
					[
						'@babel/plugin-proposal-record-and-tuple',
						{
							syntaxType: 'hash',
							importPolyfill: true,
						},
					],
				],
			},
		}),
	],
});
