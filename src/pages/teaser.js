import React from "react";
import { BaseStyles, Box } from "theme-ui";
import BodyText from "@/components/BodyText";
import { Helmet } from "react-helmet";
import Logo from "@/images/logomark.png";

const styles = {
	"&": {
		color: "primary",
		textAlign: "center"
	},
	html: {
		fontSize: "3vmin"
	},
	h1: {
		fontSize: 7,
		fontWeight: 500
	},
	h3: {
		fontSize: 5,
		fontWeight: 300
	},
	"h3 a": {
		fontWeight: 500
	},
	a: {
		color: "primary",
		textDecoration: "none"
	},
	"a:hover": {
		textDecoration: "underline"
	}
};

function Styles(
	props)
{
	return (
		<BaseStyles>
			<Box
				{...props}
				sx={styles}
			/>
		</BaseStyles>
	);
}

function Header(
	props)
{
	return (
		<Box as="header"
			{...props}
			sx={{
				height: "8rem",
				borderTop: "1rem solid black",
				backgroundImage: `url(${Logo})`,
				backgroundPosition: "center 2rem",
				backgroundSize: "10rem",
				backgroundRepeat: "no-repeat"
			}}
		/>
	);
}

function Main(
	props)
{
	return (
		<Box as="main"
			{...props}
			sx={{
				mx: "auto",
				minWidth: "300px",
				maxWidth: "1000px",
				width: "80%"
			}}
		/>
	);
}

export default function Teaser()
{
	return (
		<Styles>
			<Helmet title="Routed · Coming Soon" />
			<Header />
			<BodyText name="teaser" Container={Main} />
		</Styles>
	);
}
