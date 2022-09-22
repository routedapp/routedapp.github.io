import React from "react";
import {
	Heading,
	Flex,
	Text,
	Link as Anchor,
	Container
} from "theme-ui";
import BaseLink from "./Link";
import Logo from "./Logo";

const smaller = { fontSize: 3 };

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
		<Container as="footer"
			sx={{
				bg: "muted",
				p: 4,
			}}
		>
			<Flex as="nav">
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
							top: "-md"
						}}
					>
						<Logo />
					</Link>
					<Text>{siteDescription}</Text>
				</Flex>
				<Flex
					sx={{
						flexDirection: "column",
						mr: "md",
					}}
				>
					<Heading sx={smaller}>Directory</Heading>
					<Link to="/our-story/">Our Story</Link>
					<Link to="/faq/">FAQ</Link>
					<Link to="/support/">Support</Link>
					<Link to="/user-guides/">User Guides</Link>
				</Flex>
				<Flex
					sx={{
						flexDirection: "column"
					}}
				>
					<Heading sx={smaller}>Contact</Heading>
					<Anchor
						href="mailto:support@routed.freshdesk.com"
						sx={smaller}
					>
						support@routed.freshdesk.com
					</Anchor>
				</Flex>
			</Flex>
		</Container>
	);
}
