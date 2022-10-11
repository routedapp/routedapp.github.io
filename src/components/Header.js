import React, { useEffect, useRef, useState } from "react";
import { Box, Close, Container, Flex, MenuButton } from "theme-ui";
import Link from "./Link";
import Logo from "./Logo";

const menuStyles = {
	gap: "md",
	alignItems: "center",
	display: ["none", "flex"],

	".expanded &": {
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
			{menuExpanded
				? <Close title="Close the navigation menu" />
				: <MenuButton title="Open the navigation menu" />}
		</Box>
	);
}

export default function Header({
	location: { pathname } })
{
	const [menuExpanded, setMenuExpanded] = useState(false);
	const pathnameRef = useRef();

	const handleMenuToggle = (event) => {
		setMenuExpanded(!menuExpanded);
		event.preventDefault();
	};

	useEffect(() => {
		if (pathname !== pathnameRef.current) {
				// the location has changed, either because the user clicked a link in
				// the menu or they navigated through the browser history.  either way,
				// we want to remember the new value and close the menu.
			pathnameRef.current = pathname;
			setMenuExpanded(false);
		}
	}, [pathname]);

	return (
		<Container as="header"
			className={menuExpanded && "expanded"}
			sx={{
				py: "md",
				"&.expanded": {
					top: 0,
					position: "sticky",
					zIndex: 50,
				}
			}}
		>
			<Flex as="nav"
				sx={{
					justifyContent: "space-between",
					alignItems: "center",
				}}
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
				<Flex sx={menuStyles}>
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
