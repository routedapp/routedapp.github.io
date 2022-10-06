import React from "react";
import { Box } from "theme-ui";

	// define styles for the rich text in the BodyText content
const styles = {
	h1: {
		fontSize: "body",
		fontWeight: "normal",
		mb: "sm",
		border: "none",
	},
	p: {
		fontSize: "banner",
		fontWeight: "bold",
		lineHeight: 1.175,
		m: 0
	}
};

export default function TextBanner({
	sx,
	children })
{
	return (
		<Box
			sx={{
				textAlign: "center",
				color: "white",
				bg: "primary",
				px: "xxl",
				py: "xl",
				mx: "-lg",
				mb: "xl",
				...styles,
				...sx
			}}
		>
			{children}
		</Box>
	);
}
