/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		"./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
	],
	presets: [
		require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
	],
	theme: {
		extend: {
			colors: {
				lightOrange: {
					50: '#E69732'
				}
			}
		},
	},
	plugins: [require('tailwindcss-rtl')],
};

