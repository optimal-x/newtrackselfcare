// tailwind.config.ts
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"blink-caret": {
					"0%, 100%": { opacity: "0" },
					"50%": { opacity: "1" },
				},
			},
			"blink-caret": {
				"0%, 100%": { opacity: "0" },
				"50%": { opacity: "1" },
			},
			fontFamily: {
				work: ['"Work Sans"', "sans-serif"],
				playfair: ['"Playfair"', "serif"],
			}, //fontFamily

			colors: {
				// yellows
				bananaMania: "rgb(247 238 177)",
				arylideYellow: "rgb(233 208 107)",
				sunglow: "rgb(248 208 40)",
				spanishBistre: "rgb(140 116 44)",

				// reds
				almond: "rgb(237 224 20)",
				lightSalmon: "rgb(248 153 12)",
				congoPink: "rgb(243 136 12)",
				middleRedPurple: "rgb(159 79 6)",

				// greens
				lightSilver: "rgb(213 224 211)",
				laurelGreen: "rgb(167 191 164)",
				ebony: "rgb(83 100 64)",
				pineTree: "rgb(42 56 30)",

				// neutrals
				black: "rgb(0 0 0)",
				darkLava: "rgb(72 54 52)",
				khaki: "rgb(202 180 158)",
				cultured: "rgb(245 244 241)",
			}, // colors
		}, // extend
	},
};

export default config;
