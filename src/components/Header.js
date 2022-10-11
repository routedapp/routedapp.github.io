import React, { useState } from "react";
import { Box, Close, Container, Flex, MenuButton } from "theme-ui";
import Link from "./Link";
import Logo from "./Logo";

const menuStyles = {
	gap: "md",
	alignItems: "center",
	display: ["none", "flex"],

	".expanded > &": {
		bg: "white",
		width: "100%",
		height: "100%",
		p: "xl",
		pt: "xxl",
		top: 0,
		right: 0,
		position: "fixed",
		flexDirection: "column",
		alignItems: "self-start",
		gap: "xl",
		display: "flex",
		zIndex: 100,

		"& > a": {
			fontSize: "banner",
		}
	},
};

function MenuToggle({
	menuExpanded,
	onClick })
{
	return (
		<Box
			onClick={onClick}
			sx={{
					// line up the icon with the right edge of the header image
				mr: "-6px",
				display: ["inline-block", "none"],
				zIndex: 150,

				":hover": {
					color: "secondary"
				},

				"& button": {
					cursor: "pointer",
				}
			}}
		>
			{menuExpanded ? <Close /> : <MenuButton />}
		</Box>
	);
}

export default function Header()
{
	const [menuExpanded, setMenuExpanded] = useState(false);

	const handleMenuToggle = (event) => {
		setMenuExpanded(!menuExpanded);
		event.preventDefault();
	};

	const handleLinkClick = (event) => {
			// close the menu only after a click on a link to navigate
		if (event.target?.tagName === "A") {
			setMenuExpanded(false);
		}
	};

	return (
		<Container as="header"
			sx={{
				py: "md",
			}}
		>
			<Flex as="nav"
				className={menuExpanded && "expanded"}
				sx={{ justifyContent: "space-between" }}
			>
				<Link to="/"
					title="Home"
					onClick={handleMenuToggle}
				>
					<Logo sx={{ height: "2.25rem" }} />
				</Link>
				<MenuToggle
					menuExpanded={menuExpanded}
					onClick={handleMenuToggle}
				/>
				<Flex
					onClick={handleLinkClick}
					sx={menuStyles}
				>
					{menuExpanded &&
						<Link to="/home">Home</Link>
					}
					<Link to="/our-story/">Our Story</Link>
					<Link to="/faq/">FAQ</Link>
					<Link to="/support/">Support</Link>
					<Link to="/user-guides/" partiallyActive={true}>User Guides</Link>
				</Flex>
			</Flex>
		</Container>
	);
}
