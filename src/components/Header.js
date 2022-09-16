import React from "react";
import { Box, Flex } from "theme-ui";
import Link from "./Link";
import Logo from "./Logo";

export default function Header()
{
	return (
		<Box as="header"
			sx={{
				mb: "24px"
			}}
		>
			<Box as="div"
				sx={{
					m: "0 auto",
					maxWidth: "80%",
					px: 3,
					py: 4,
				}}
			>
				<Flex as="nav" sx={{ justifyContent: "space-between" }}>
					<Link to="/">
						<Logo />
					</Link>
					<Flex>
						<Link to="/our-story/">Our Story</Link>
						<Link to="/faq/">FAQ</Link>
						<Link to="/support/">Support</Link>
						<Link to="/user-guides/" partiallyActive={true}>User Guides</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}
