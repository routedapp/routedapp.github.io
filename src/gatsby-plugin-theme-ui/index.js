import { makeStyles, makeTheme } from "@theme-ui/css/utils";
import { Variables } from "./Variables";

const BaseFontSize = ["10px", "11px", "12px"];
const RemUnits = 1.5;

const vars = new Variables();

const breakpoints = ["768px", "1000px"];

const space = [
	["none", 	[0, 	0]],		// 0				0
	["xs", 		[.25, .5]],		// 3.75px		9px
	["sm", 		[.5, 	1]],		// 7.5px		18px
	["md", 		[1, 	2]],		// 15px			36px
	["lg", 		[2, 	3]],		// 30px			54px
	["xl", 		[3, 	5]],		// 45px			90px
	["xxl",		[4, 	8]],		// 60px			144px
]
	.reduce((result, [key, values]) => {
		const negKey = `neg-${key}`;
		const cssValues = values.map((value) => `${value * RemUnits}rem`);
		const negativeCSSValues = cssValues.map((value) => `-${value}`);

		result[key] = vars.add(key, cssValues);
		result[negKey] = vars.add(negKey, negativeCSSValues);

		return result;
	}, {});

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
	red: "#dc3545",
	yellow: "#ffc107",
	green: "#28a745",
	teal: "#00adbb",
	cyan: "#17a2b8",
};

const colors = {
	primary: baseColors.black,
	primary50: "#959595",
	secondary: baseColors.blue,
	secondary50: "#b7b9ea",
	secondary70: "#9699de",
	secondaryDarker: "#1f3387",
	secondaryDarkest: "#061659",
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
};

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
	"1.25rem",
	"1.5rem",
	"1.75rem",
	"2rem",
	"3rem",
	"4rem",
	"5rem",
	"6rem",
];
fontSizes.lead = fontSizes[3];
fontSizes.body = fontSizes[6];
fontSizes.banner = "2.5rem";

const lineHeights = {
	body: 1.3,
	heading: 1.2,
};

	// container widths
const sizes = {
	sm: 540,
	md: 720,
	lg: 960,
	xl: 1140,
	container: 1200,
};

const radii = {
	default: "0.25rem",
	sm: "0.2rem",
	lg: "0.5rem",
	pill: "50rem",
};

const shadows = {
	default: "0 .5rem 1rem rgba(0, 0, 0, .15)",
	sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
	lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
};

const heading = {
	fontSize: "body",
	fontFamily: "heading",
	fontWeight: "heading",
	lineHeight: "heading",
	mt: 0,
	mb: "xs",
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
	paragraph: {
		fontSize: "body",
		lineHeight: "body",
		mt: 0,
		mb: "xs",
	},
	heading,
	display,
	name: {
		fontWeight: "bold",
		fontSize: 3
	},
	headingFeature: {
		...heading,
		mb: 0,
	},
	subheading: {
		fontSize: 2,
		fontWeight: "normal",
		mt: 2
	},
};

const layout = {
	container: {
		px: "lg"
	}
};

const buttons = {
	primary: {
		fontFamily: "body",
		fontWeight: "bold",
		fontSize: 4,
		bg: "primary",
		color: "white",
		px: "2.5rem",
		py: "1.25rem",
		borderRadius: "1.25rem",
		":hover": {
			bg: "secondaryDarker",
			cursor: "pointer"
		},
		":active": {
			bg: "secondaryDarkest",
		}
	}
};

const images = {
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 99999,
	}
};

	// set up base styles for normal HTML tags
const styles = makeStyles({
	root: {
		fontFamily: "body",
		lineHeight: "body",
		fontWeight: "body",
		fontSize: BaseFontSize,
		...vars.object(),

		"&.navmenu-expanded": {
			overflow: "hidden"
		}
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
		mt: 0,
		mb: "sm"
	},
	h1: {
		...heading,
		fontSize: "banner",
		fontWeight: "bold",
		pb: "sm",
		mb: ["md", "sm"],
		borderStyle: "solid",
		borderImageSlice: 1,
		borderWidth: "0 0 5px 0",
		borderImageSource: "linear-gradient(138.16deg, #425cc6 18.75%, #00adbb 61.85%, #99e6d8 94.61%)",
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
		mb: "md",
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
	images,
	styles,
});
