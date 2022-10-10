import React from "react";
import {
	Box,
	Heading,
	Flex,
	Text,
	Link as Anchor,
	Container
} from "theme-ui";
import BaseLink from "./Link";
import Logo from "./Logo";

const smaller = { fontSize: 4 };
const smallerHeading = {
	...smaller,
	mb: [0, "sm"]
};

const Link = ({ sx, ...props }) => (
		// wrap the GatsbyLink in a div so that the anchor won't be stretched to
		// the width of the column.  that way, it only shows a hover state when the
		// mouse is over the text.
	<div className="Link">
		<BaseLink
			{...props}
			activeStyle={{ fontWeight: "body" }}
				// override the activeClassName so that links in the footer don't update
				// to show the current page
			activeClassName=""
			sx={{
				...smaller,
				fontWeight: "body",
				m: 0,
				mb: "xs",
				"&:hover": {
					textDecoration: "underline"
				},
				...sx
			}}
		/>
	</div>
);

export default function Footer({
	siteDescription })
{
	return (
		<Box as="footer"
			sx={{
				width: "100%",
				bg: "muted",
			}}
		>
			<Container as="nav"
				sx={{
					py: "xl",
					display: "flex",
					flexDirection: ["column", "row"],
					gap: "lg",
				}}
			>
				<Flex
					sx={{
						position: "relative",
						flexDirection: "column",
						flex: 2
					}}
				>
					<Link to="/"
						title="Home"
						sx={{
							position: "absolute",
							left: "2px",
							top: "-2.5rem"
						}}
					>
						<Logo sx={{ height: ["1.75rem", "1.5rem"] }}/>
					</Link>
					<Text sx={{ fontSize: [4, "body"] }}>{siteDescription}</Text>
				</Flex>
				<Flex
					sx={{
						flexDirection: "column",
						gap: ["md", 0],
					}}
				>
					<Heading sx={smallerHeading}>Directory</Heading>
					<Link to="/our-story/">Our Story</Link>
					<Link to="/faq/">FAQ</Link>
					<Link to="/support/">Support</Link>
					<Link to="/user-guides/">User Guides</Link>
				</Flex>
				<Flex
					sx={{
						flexDirection: "column",
						gap: ["md", 0],
					}}
				>
					<Heading sx={smallerHeading}>Contact</Heading>
					<Anchor
						href="mailto:contact@routedapp.org"
						sx={smaller}
					>
						contact@routedapp.org
					</Anchor>
				</Flex>
			</Container>
		</Box>
	);
}
