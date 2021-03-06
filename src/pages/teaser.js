import React from "react";
import { BaseStyles, Box } from "theme-ui";
import { Helmet } from "react-helmet";
import BodyText from "@/components/BodyText";
import Logo from "@/images/logomark.png";

const textColor = "black";
	// since we can't seem to easily apply a new font-size to html or body from
	// here, set the font-size on the container using vmin, so it's based on the
	// smaller side of the viewport, and then use em instead of rem to scale the
	// font in the rest of the elements
const styles = {
	"&": {
		color: textColor,
		textAlign: "center",
		fontSize: "3vmin"
	},
	h1: {
		fontSize: "3em",		// theme size 7
		fontWeight: 500
	},
	h3: {
		fontSize: "1.75em",	// theme size 5
		fontWeight: 300
	},
	a: {
		color: textColor,
		fontSize: "1em",
		fontWeight: 500,
		textDecoration: "none"
	},
	"a:hover": {
		textDecoration: "underline"
	},
	header: {
		height: "8em",
		borderTop: "1em solid black",
		backgroundImage: `url(${Logo})`,
		backgroundPosition: "center 2em",
		backgroundSize: "10em",
		backgroundRepeat: "no-repeat"
	},
	main: {
		mx: "auto",
		minWidth: "300px",
		maxWidth: "1000px",
		width: "80%"
	}
};

function Styles(
	props)
{
		// we can't just add an sx prop to the BaseStyles, because the styles in sx
		// replace what's in BaseStyles instead of being merged with it
	return (
		<BaseStyles>
			<Box
				{...props}
				sx={styles}
			/>
		</BaseStyles>
	);
}

export default function Teaser()
{
	return (
		<Styles>
			<Helmet title="Routed · Coming Soon" />
			<header />
			<BodyText name="teaser" Container="main" />
		</Styles>
	);
}
