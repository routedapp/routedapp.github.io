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
			<div style={{ textAlign: "center", marginBottom: "4rem" }}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Under_construction_graphic.gif?20090304223820" />
				<img src="https://i.giphy.com/media/QZIcGPmYMclva/giphy.webp" />
				<img src="https://static.wixstatic.com/media/ff2944_330f709fada749118c653002274fbdca~mv2.gif" />
				<img src="https://content.presentermedia.com/content/animsp/00002000/2299/under_construction_PA_300_wht.gif" />
			</div>
			<Flex as="nav" sx={{ justifyContent: "space-between" }}>
				<Link to="/"
					title="Home"
				>
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
