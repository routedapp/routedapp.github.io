import React from "react";
import {
	Themed,
	Flex,
	Text,
	Link as Anchor,
	Container
} from "theme-ui";
import BaseLink from "./Link";
import Logo from "./Logo";

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
				fontWeight: "body",
				fontSize: 3,
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
						sx={{
							position: "absolute",
							left: "3px",
							top: "-m"
						}}
					>
						<Logo />
					</Link>
					<Text>{siteDescription}</Text>
				</Flex>
				<Flex
					sx={{
						flexDirection: "column",
						mr: "m",
					}}
				>
					<Themed.h5>Directory</Themed.h5>
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
					<Themed.h5>Contact</Themed.h5>
					<Anchor
						href="mailto:support@routed.freshdesk.com"
						sx={{ fontSize: 3 }}
					>
						support@routed.freshdesk.com
					</Anchor>
				</Flex>
			</Flex>
		</Container>
	);
}
