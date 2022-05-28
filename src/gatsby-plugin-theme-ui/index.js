import { deep, bootstrap } from "@theme-ui/presets";

const colors = {
		primary: "#00205c",
		secondary: "#425cc7",
		highlight: "#00adbb",
};
const theme = {
	...bootstrap,

	fonts: {
		...bootstrap.fonts,
		body: `"Public SansVariable", ${bootstrap.fonts.body}`
	},
	colors: {
		...bootstrap.colors,
		modes: {
			dark: {
				...deep.colors,
			},
		},
		...colors,
		text: colors.primary
	},

	styles: {
		...bootstrap.styles,
		h1: {
			fontSize: 8,
			fontWeight: "bold",
			mt: "48px",
			mb: "48px"
		},
		h4: {
			...bootstrap.styles.h4,
			fontWeight: "bold"
		},
		root: {
			...bootstrap.styles.root,
			// make even bare <p> elements 1rem
			p: {
				fontSize: 3
			}
		}
	},

	text: {
		name: {
			fontWeight: "bold",
			fontSize: 2
		},
		subheading: {
			fontSize: 2,
			fontWeight: "normal",
			mt: 2
		}
	},

	buttons: {
		primary: {
			fontWeight: "bold",
			":hover": {
				cursor: "pointer"
			}
		}
	},

	cards: {
		primary: {
			width: 180,
			textAlign: "center",
			padding: "20px 30px",
			mr: "1.5rem",
			mb: "1.5rem",
			borderRadius: 4,
			boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
		}
	},

	images: {
		avatar: {
			width: 100,
			height: 100,
			borderRadius: 99999,
		},
	}
};

export default theme;
