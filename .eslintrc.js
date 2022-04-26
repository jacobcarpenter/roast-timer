/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',

		// must be last? https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/prop-types': ['error', { skipUndeclared: true }],
		'prettier/prettier': 'error',
	},
};
