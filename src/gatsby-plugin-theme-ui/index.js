//import { deep } from "@theme-ui/presets";
import { makeStyles, makeTheme } from "@theme-ui/css/utils";

const baseColors = {
	white: "#fff",
	black: "#000",
	gray: [
		"#fff", // 0 index
		"#f8f9fa",
		"#e9ecef",
		"#dee2e6",
		"#ced4da",
		"#adb5bd",
		"#6c757d",
		"#495057",
		"#343a40",
		"#212529",
	],
	darkblue: "#00205c",
	blue: "#425cc7",
	indigo: "#6610f2",
	purple: "#6f42c1",
	pink: "#e83e8c",
	red: "#dc3545",
	orange: "#fd7e14",
	yellow: "#ffc107",
	green: "#28a745",
	teal: "#00adbb",
	cyan: "#17a2b8",
};

const colors = {
	primary: baseColors.black,
	secondary: baseColors.blue,
	highlight: baseColors.teal,
	text: baseColors.black,
	grayDark: baseColors.gray[4],
	background: baseColors.white,
	muted: "#f5f5f5",
	success: baseColors.green,
	info: baseColors.cyan,
	warning: baseColors.yellow,
	danger: baseColors.red,
	light: baseColors.gray[1],
	dark: baseColors.gray[8],
	textMuted: baseColors.gray[6],
	...baseColors,
//	modes: {
//		dark: {
//			...deep.colors,
//		},
//	},
};

const spaceUnit = 1.25;
const space = [
	["none", 0],	// 0
	["xs", .5],		// 10px
	["s", 1],			// 20px
	["m", 2],			// 40px
	["l", 4],			// 80px
	["xl", 6]			// 120px
]
	.reduce((result, [key, value]) => {
		const cssValue = `${value * spaceUnit}rem`;

		result[key] = cssValue;
		result["-" + key] = "-" + cssValue;
		result[value] = cssValue;

		return result;
	}, {});

const breakpoints = ["576px", "768px", "992px", "1200px"];

const fonts = {
	body: "'Public SansVariable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	heading: "inherit",
	monospace:
		"SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	// NOTE(@mxstbr): TypeScript does not let us do the self-references below if we don't provide "default" values
	sans: "",
};
fonts.sans = fonts.body;

const fontWeights = {
	body: 400,
	heading: 700,
	bold: 700,
	light: 300,
	// NOTE(@mxstbr): TypeScript does not let us do the self-references below if we don't provide "default" values
	normal: 0,
	display: 0,
};
fontWeights.normal = fontWeights.body;
fontWeights.display = fontWeights.light;

const fontSizes = [
	"0.75rem", // "80%",
	"0.875rem",
	"1rem",
	"1.125rem",
	"1.5rem",
	"1.75rem",
	"2rem",
	"3rem",
	"4rem",
	"5rem",
	"6rem",
];
fontSizes.lead = fontSizes[3];
fontSizes.body = fontSizes[5];

const lineHeights = {
	body: 1.3,
	heading: 1.2,
};

const sizes = {
	// container widths
	sm: 540,
	md: 720,
	lg: 960,
	xl: 1140,
	container: 1440,
};

const radii = {
	default: "0.25rem",
	sm: "0.2rem",
	lg: "0.3rem",
	pill: "50rem",
};

const shadows = {
	default: "0 .5rem 1rem rgba(0, 0, 0, .15)",
	sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
	lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
};

const heading = {
	fontFamily: "heading",
	fontWeight: "heading",
	lineHeight: "heading",
	mt: 0,
	mb: 1,
};

const display = {
	fontWeight: "display",
	lineHeight: "heading",
};

// variants
const text = {
	default: {
		fontSize: "body"
	},
	heading,
	display,
	name: {
		fontWeight: "bold",
		fontSize: 3
	},
	subheading: {
		fontSize: 2,
		fontWeight: "normal",
		mt: 2
	},
};

const layout = {
	container: {
		px: "l"
	}
};

const buttons = {
	primary: {
		fontWeight: "bold",
		fontSize: 4,
		px: "2.5rem",
		py: "1.25rem",
		borderRadius: "1.25rem",
		":hover": {
			cursor: "pointer"
		}
	}
};

const cards = {
	primary: {
		width: 180,
		textAlign: "center",
		padding: "20px 30px",
		mr: "1.5rem",
		mb: "1.5rem",
		borderRadius: 4,
		boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
	}
};

const images = {
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 99999,
	}
};

const styles = makeStyles({
	root: {
		fontFamily: "body",
		lineHeight: "body",
		fontWeight: "body",
		fontSize: "16px",
	},
	a: {
		color: "primary",
		textDecoration: "none",
		":hover": {
			textDecoration: "underline",
		},
	},
	p: {
		fontSize: "body",
		lineHeight: "body",
	},
	h1: {
		...heading,
		fontSize: "body",
		fontWeight: "normal",
		lineHeight: 1.75,
		mt: "-.5em",
		mb: "m",
		borderBottom: "5px solid",
		borderBottomColor: "highlight",
		display: "inline-block"
	},
	h2: {
		...heading,
		fontSize: 6,
	},
	h3: {
		...heading,
		fontSize: 5,
	},
	h4: {
		...heading,
		fontSize: 4,
	},
	h5: {
		...heading,
		fontSize: 3,
	},
	h6: {
		...heading,
		fontSize: 2,
	},
	li: {
		fontSize: "body"
	},
	blockquote: {
		fontSize: 3,
		mb: 3,
	},
	table: {
		width: "100%",
		marginBottom: 3,
		color: "gray.9",
		borderCollapse: "collapse",
	},
	th: {
		verticalAlign: "bottom",
		borderTopWidth: 2,
		borderTopStyle: "solid",
		borderTopColor: "gray.3",
		borderBottomWidth: 2,
		borderBottomStyle: "solid",
		borderBottomColor: "gray.3",
		padding: ".75rem",
		textAlign: "inherit",
	},
	td: {
		borderBottomWidth: 2,
		borderBottomStyle: "solid",
		borderBottomColor: "gray.3",
		verticalAlign: "top",
		padding: ".75rem",
	},
	inlineCode: {
		color: "pink",
	},
	img: {
		maxWidth: "100%",
		height: "auto",
	},
});

export default makeTheme({
	breakpoints,
	colors,
	space,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	sizes,
	shadows,
	radii,
	text,
	layout,
	buttons,
	cards,
	images,
	styles,
});
