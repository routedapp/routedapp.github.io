import React from "react";
import { Box, css, useThemeUI } from "theme-ui";

const styles = {
	"&": {
		textAlign: "center",
		color: "white",
		bg: "primary",
		px: "xxl",
		py: "xl",
		mx: "-lg",
		mb: "xl",
	},
	h1: {
		fontSize: "body",
		fontWeight: "normal",
		mb: "sm"
	},
	p: {
		fontSize: "2.5rem",
		fontWeight: "bold",
		lineHeight: 1.175,
		m: 0
	}
};

export default function TextBanner({
	sx,
	children })
{
	const { theme } = useThemeUI();

	return (
		<Box
			css={css(styles)(theme)}
			sx={sx}
		>
			{children}
		</Box>
	);
}
