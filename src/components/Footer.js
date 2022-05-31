import React from "react";
import { Box, Flex, Text, Link as Anchor, css, useThemeUI } from "theme-ui";
import BaseLink from "./Link";

const footerStyles = {
	"&": {
		background: "primary",
		color: "white",
		mt: 5,
		p: 0,
	},
	a: {
		color: "white"
	},
	h3: {
		mt: 0
	}
};

const Link = ({ sx, ...props }) => (
	<BaseLink
		{...props}
		activeStyle={{ fontWeight: "body" }}
		activeClassName=""
		sx={{
			fontWeight: "body",
			fontSize: 2,
			ml: 0,
			...sx
		}}
	/>
);

export default function Footer({
	siteTitle,
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
							flexDirection: "column",
							flex: 2
						}}
					>
						<h3>
							<Link to="/" sx={{ fontWeight: "bold" }}>
								{siteTitle}
							</Link>
						</h3>
						<Text>{siteDescription}</Text>
					</Flex>
					<Flex
						sx={{
							flexDirection: "column",
							mr: "3rem"
						}}
					>
						<h3>Directory</h3>
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
						<h3>Contact</h3>
						<Anchor href="mailto:contact@routedapp.net">contact@routedapp.net</Anchor>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
