import React from "react";
import { Container, Flex } from "theme-ui";
import Link from "./Link";
import Logo from "./Logo";

export default function Header()
{
	return (
		<Container as="header"
			sx={{
				py: "md",
			}}
		>
			<Flex as="nav" sx={{ justifyContent: "space-between" }}>
				<Link to="/">
					<Logo />
				</Link>
				<Flex sx={{ gap: "md" }} >
					<Link to="/our-story/">Our Story</Link>
					<Link to="/faq/">FAQ</Link>
					<Link to="/support/">Support</Link>
					<Link to="/user-guides/" partiallyActive={true}>User Guides</Link>
				</Flex>
			</Flex>
		</Container>
	);
}
