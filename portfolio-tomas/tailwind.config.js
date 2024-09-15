/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Archivo", "sans-serif"],
			},

			colors: {
				background: "#F5F5F5", //light grey
				backgroundsecond: "#E0E0E0",
				text: "#424242", //dark grey
				primary: "#48CFCB", //turquoise
				secondary: "#229799", //dark turquoise
			},
		},
		dropShadow: {
			glow: [
				"0 0px 20px rgba(255,255, 255, 0.35)",
				"0 0px 65px rgba(255, 255,255, 0.2)",
			],
		},
	},
	plugins: [],
};
// Background: #F5F5F5
// Text and Headers: #424242
// Primary Buttons/Links: #48CFCB
// Secondary Buttons/Highlights: #229799
