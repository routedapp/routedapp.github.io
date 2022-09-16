import React from "react";
import { Themed, Box, Flex, Text, Link as Anchor, css, useThemeUI } from "theme-ui";
import BaseLink from "./Link";
import Logo from "./Logo";

const footerStyles = {
	"&": {
		background: "muted",
		color: "",
		mt: 5,
		p: 0,
	},
	h5: {
		mt: 0,
		mb: "1rem"
	},
	a: {
		fontSize: 3
	}
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
				fontWeight: "body",
				fontSize: 3,
				ml: 0,
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
	const { theme } = useThemeUI();

	return (
		<Box as="footer"
			css={css(footerStyles)(theme)}
		>
			<Box
				sx={{
					m: "0 auto",
					maxWidth: "80%",
					px: 3,
					py: "5rem",
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
								top: -2
							}}
						>
							<Logo />
						</Link>
						<Text>{siteDescription}</Text>
					</Flex>
					<Flex
						sx={{
							flexDirection: "column",
							mr: "3rem",
							"& .Link": {
								mb: 1
							}
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
						<Anchor href="mailto:support@routed.freshdesk.com">support@routed.freshdesk.com</Anchor>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
